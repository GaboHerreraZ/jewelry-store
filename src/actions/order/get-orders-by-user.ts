"use server";
import { OrderCheckout } from "@/interfaces/orderCheckout";
import prisma from "@/lib/prisma";

export const getOrdersByUser = async (userId: string) => {
  return (await prisma.order.findMany({
    where: {
      userId,
    },
    include: {
      address: {
        include: {
          address: true,
        },
      },
      items: true,
    },
  })) as OrderCheckout[];
};
