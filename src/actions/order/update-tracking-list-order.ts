"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const updateOrderTrackingList = async (
  orderId: string,
  trackingLink: string
) => {
  await prisma.order.update({
    where: {
      id: orderId,
    },
    data: {
      trackingLink,
      shippingStatus: "shipped",
    },
  });

  revalidatePath("/admin/ordenes");
  revalidatePath(`/admin/orden/${orderId}`);
};
