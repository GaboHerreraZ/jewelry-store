"use server";
import prisma from "@/lib/prisma";

export const getAddress = async (id: string) => {
  const whereClause = {
    userId: id ? id : "",
  };

  return await prisma.userAddress.findMany({
    where: whereClause,
    orderBy: {
      main: "desc",
    },
  });
};
