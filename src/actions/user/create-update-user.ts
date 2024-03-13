"use server";
import { User } from "@/interfaces/user";
import prisma from "@/lib/prisma";
import { Gender } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const createUpdatedUser = async (user: User) => {
  try {
    const prismaTx = await prisma.$transaction(async (client) => {
      const userExists = await client.user.findUnique({
        where: {
          authId: user.authId,
        },
      });

      if (userExists) {
        const { preference, gender, ...rest } = user;
        const newGender = gender as Gender;

        await client.user.update({
          where: { id: user.id },
          data: {
            ...rest,
            birthMonth: parseInt(rest.birthMonth.toString()),
            birthDay: parseInt(rest.birthDay.toString()),
            updatedAt: new Date(),
            gender: newGender,
          },
        });

        await client.preference.update({
          where: { id: preference?.id },
          data: preference!,
        });
      } else {
        const { preference, gender, ...rest } = user;
        const newGender = gender as Gender;

        const newUser = await client.user.create({
          data: {
            ...rest,
            birthMonth: parseInt(rest.birthMonth.toString()),
            birthDay: parseInt(rest.birthDay.toString()),
            completeProfile: true,
            gender: newGender,
          },
        });

        await client.preference.create({
          data: {
            ...preference!,
            userId: newUser.authId,
          },
        });
      }

      return {
        ok: true,
      };
    });

    revalidatePath("/usuario/perfil");
    revalidatePath("/admin/usuarios");
    revalidatePath(`/admin/usuario/${user.authId}`);

    return {
      ok: prismaTx.ok,
    };
  } catch (error) {
    return {
      ok: false,
      error: "Error al crear o actualizar el usuario",
    };
  }
};
