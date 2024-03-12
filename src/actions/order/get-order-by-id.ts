"use server";
import { OrderCheckout } from "@/interfaces/orderCheckout";
import prisma from "@/lib/prisma";

export const getOrderById = async (id: string) => {
  return (await prisma.order.findUnique({
    where: {
      id,
    },
    include: {
      address: {
        include: {
          address: true,
        },
      },
      items: {
        include: {
          product: {
            include: {
              productImage: true,
            },
          },
        },
      },
    },
  })) as OrderCheckout;
};
