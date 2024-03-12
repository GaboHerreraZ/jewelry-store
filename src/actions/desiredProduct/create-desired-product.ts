"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createDesiredProduct = async (
  productId: string,
  authId: string
) => {
  const desiredProduct = await prisma.desiredProduct.findFirst({
    where: {
      productId,
      userId: authId,
    },
  });

  if (!desiredProduct) {
    await prisma.desiredProduct.create({
      data: {
        productId,
        userId: authId,
      },
    });
  } else {
    await prisma.desiredProduct.delete({
      where: {
        id: desiredProduct.id,
      },
    });
  }

  revalidatePath(`/usuario/${authId}/mis-deseados`);
};
