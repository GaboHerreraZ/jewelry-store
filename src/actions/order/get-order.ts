"use server";
import prisma from "@/lib/prisma";
import { OrderCheckout } from "@/interfaces/orderCheckout";

export const getOrder = async (id: string) => {
  return (await prisma.order.findUnique({
    where: {
      id,
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
      address: {
        include: {
          address: true,
        },
      },
    },
  })) as OrderCheckout;
};
