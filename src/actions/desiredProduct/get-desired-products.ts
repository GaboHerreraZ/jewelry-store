import prisma from "@/lib/prisma";

export const getDesiredProducts = async (authId: string) => {
  return await prisma.product.findMany({
    where: {
      desiredProduct: {
        some: {
          userId: authId,
        },
      },
    },
    include: {
      desiredProduct: true,
      productImage: true,
    },
  });
};
