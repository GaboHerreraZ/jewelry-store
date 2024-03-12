"use server";
import { User } from "@/interfaces/user";
import prisma from "@/lib/prisma";

export const getUsers = async ({ page = 1, take = 10 }) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  const totalCount = await prisma.user.count();

  const users = (await prisma.user.findMany({
    include: {
      preference: true,
    },
  })) as User[];

  const totalPages = Math.ceil(totalCount / take);

  return {
    currentPage: page,
    totalPages,
    users,
  };
};
