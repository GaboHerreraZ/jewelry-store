"use server";
import { Base } from "@/interfaces/base";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createCategory = async (category: Base) => {
  if (category?.id) {
    await prisma.category.update({
      where: { id: category.id },
      data: category,
    });
  } else {
    await prisma.category.create({
      data: category,
    });
  }

  revalidatePath("/admin/categorias");
  revalidatePath("/admin");

  return true;
};
