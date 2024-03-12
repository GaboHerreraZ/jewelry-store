"use server";
import prisma from "@/lib/prisma";
import { OrderCheckout } from "@/interfaces/orderCheckout";

export const getOrders = async (authId: string) => {
  return (await prisma.order.findMany({
    where: {
      userId: authId,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      items: {
        include: {
          product: {
            include: {
              productImage: true,
            },
          },
        },
      },
      address: true,
    },
  })) as OrderCheckout[];
};
