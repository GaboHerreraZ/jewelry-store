"use server";
import { Address } from "@/interfaces/address";
import prisma from "@/lib/prisma";
import { UserAddress } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const createUpdateAddress = async (address: Address) => {
  try {
    const prismaTx = await prisma.$transaction(async (client) => {
      let newAddress: UserAddress;

      const mainAddress = await client.userAddress.findMany({
        where: {
          main: true,
        },
      });

      if (mainAddress) {
        await client.userAddress.updateMany({
          where: {
            main: true,
          },
          data: {
            main: false,
          },
        });
      }

      if (address.id) {
        newAddress = await client.userAddress.update({
          where: {
            id: address.id,
          },
          data: {
            ...address,
            updatedAt: new Date(),
          },
        });
      } else {
        newAddress = await client.userAddress.create({
          data: {
            ...address,
            createdAt: new Date(),
          },
        });
      }

      return {
        ok: true,
        address: newAddress,
      };
    });

    revalidatePath(`/usuario/mis-direcciones`);

    return {
      ok: true,
      address: prismaTx.address,
    };
  } catch (error) {
    return {
      ok: false,
      error: error,
    };
  }
};
