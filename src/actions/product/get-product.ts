"use server";
import prisma from "@/lib/prisma";

export const getProduct = async (sku: string) => {
  return await prisma.product.findUnique({
    where: {
      sku,
    },
    include: {
      productImage: true,
    },
  });
};
