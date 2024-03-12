"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const updateOrderDelivered = async (orderId: string) => {
  await prisma.order.update({
    where: {
      id: orderId,
    },
    data: {
      shippingStatus: "delivered",
    },
  });

  revalidatePath(`/admin/orden/${orderId}`);
  revalidatePath("/admin/ordenes");
};
