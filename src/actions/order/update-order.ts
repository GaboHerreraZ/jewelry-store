"use server";
import prisma from "@/lib/prisma";
import { OrderStatus } from "@/utils/constant";

export const updateOrder = async (
  id: string,
  status: OrderStatus,
  paymentId: string,
  paymentMethod: string
) => {
  try {
    const response = await prisma.order.update({
      where: {
        id,
      },
      data: {
        status,
        paymentId,
        paymentMethod,
        isPaid: true,
        paidAt: new Date(),
      },
    });

    if (response) {
      return {
        ok: true,
        message: "Orden actualizada",
      };
    }
  } catch (e) {
    return {
      ok: false,
      message: "Error actualizando orden",
    };
  }
};
