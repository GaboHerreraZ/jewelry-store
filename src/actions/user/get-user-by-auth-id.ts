"use server";

import prisma from "@/lib/prisma";

export const getUserByAuthId = async (authId: string) => {
  return await prisma.user.findFirst({
    where: {
      authId,
    },
    include: {
      preference: true,
    },
  });
};
