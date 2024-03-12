"use server";
import prisma from "@/lib/prisma";

export const getDashboardInformation = async () => {
  const users = await prisma.user.count();
  const products = await prisma.product.count();
  const orders = await prisma.order.count();
  const categories = await prisma.category.count();
  const subcategory = await prisma.subcategory.count();

  return {
    users,
    products,
    orders,
    categories,
    subcategory,
  };
};
