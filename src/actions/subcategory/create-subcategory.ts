"use server";
import { Base } from "@/interfaces/base";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createSubcategory = async (subcategory: Base) => {
  if (subcategory?.id) {
    await prisma.subcategory.update({
      where: { id: subcategory.id },
      data: subcategory,
    });
  } else {
    await prisma.subcategory.create({
      data: subcategory,
    });
  }

  revalidatePath("/admin/subcategorias");
  revalidatePath("/admin");

  return true;
};
