"use client";

import { usePaymentStore } from "@/store";
import Link from "next/link";

export const EditAddress = () => {
  const created = usePaymentStore((state) => state.created);

  return (
    <>
      {!created && (
        <Link
          className="underline italic text-sm"
          href={`/usuario/mis-direcciones`}
        >
          Editar Direcciones
        </Link>
      )}
    </>
  );
};
