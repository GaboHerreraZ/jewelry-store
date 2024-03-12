"use server";

import prisma from "@/lib/prisma";

export const getSubcategories = async () => {
  return await prisma.subcategory.findMany();
};
