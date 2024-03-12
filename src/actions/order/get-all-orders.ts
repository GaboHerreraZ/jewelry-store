"use server";
import { Order } from "@/components/order/Order";
import { OrderCheckout } from "@/interfaces/orderCheckout";
import prisma from "@/lib/prisma";

export const getAllOrders = async ({ page = 1, take = 10 }) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  const totalCount = await prisma.order.count();

  const orders = (await prisma.order.findMany({
    include: {
      address: {
        include: {
          address: true,
        },
      },
      items: true,
    },
  })) as OrderCheckout[];

  const totalPages = Math.ceil(totalCount / take);

  return {
    currentPage: page,
    totalPages,
    orders,
  };
};
