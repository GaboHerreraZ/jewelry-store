"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const updateWholesaler = async (authId: string) => {
  const user = await prisma.user.findFirst({
    where: {
      authId,
    },
  });

  const response = await prisma.user.update({
    where: {
      authId: user?.authId,
    },
    data: {
      wholesaler: !user?.wholesaler,
    },
  });

  revalidatePath(`/admin/usuario/${authId}`);
  revalidatePath(`/admin/usuarios`);
};
