"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteSubcategory = async (id: string) => {
  await prisma.subcategory.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/subcategorias");
  return true;
};
