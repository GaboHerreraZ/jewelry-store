"use server";

import prisma from "@/lib/prisma";
import { getSecretTokenWompi } from "@/utils";
import { OrderCheckout } from "@/interfaces/orderCheckout";
import { Order } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const createOrder = async (order: OrderCheckout) => {
  try {
    const prismaTx = await prisma.$transaction(async (tx) => {
      const { address, items, user, ...rest } = order;

      let orderCreated: Order;

      if (!order.id) {
        orderCreated = await tx.order.create({
          data: {
            ...rest,
            items: {
              create: [...items],
            },
            address: {
              create: {
                addressId: address.addressId,
                email: address.email,
                phone: address.phone,
              },
            },
            userId: order.userId,
          },
        });
      } else {
        await tx.productOrder.deleteMany({
          where: {
            orderId: order.id,
          },
        });

        orderCreated = await tx.order.update({
          where: {
            id: order.id,
          },
          data: {
            ...rest,
            items: {
              create: [...items],
            },
            address: {
              update: {
                where: {
                  orderId: order.id,
                },
                data: {
                  addressId: address.addressId,
                  email: address.email,
                  phone: address.phone,
                },
              },
            },
          },
        });
      }

      const integritySecret = await getSecretTokenWompi(
        orderCreated.id,
        orderCreated.total,
        process.env.NEXT_PUBLIC_WOMPI_INTEGRITY ?? ""
      );

      await tx.order.update({
        where: {
          id: orderCreated.id,
        },
        data: {
          secretToken: integritySecret,
        },
      });

      return {
        order: orderCreated,
        integritySecret: integritySecret,
      };
    });

    revalidatePath("/usuario/historial-pedidos");
    revalidatePath("/admin");

    return {
      ok: true,
      order: prismaTx.order as OrderCheckout,
      publicKey: process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY,
      integritySecret: prismaTx.integritySecret,
    };
  } catch (e) {
    return {
      ok: false,
      message: "Error creando orden",
    };
  }
};
