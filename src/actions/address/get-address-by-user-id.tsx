"use server";
import prisma from "@/lib/prisma";

export const getAddressByUserId = async (id: string) => {
  return await prisma.userAddress.findFirst({
    where: {
      id,
    },
  });
};
