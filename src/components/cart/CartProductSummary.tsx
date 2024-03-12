"use client";

import { useCartStore, usePaymentStore } from "@/store";
import { CartProductSummaryDetail } from "./CartProductSummaryDetail";
import Link from "next/link";

export const CartProductSummary = ({
  authId,
  summary = false,
}: {
  authId: string;
  summary: boolean;
}) => {
  const products = useCartStore((state) => state.products);
  const created = usePaymentStore((state) => state.created);

  return (
    <section className="w-full  px-10">
      <header className="flex justify-between items-center border-b-[1px] border-gray-200">
        <h1 className="font-bold text-3xl pb-5 ">
          {!summary ? "Artículos en el carrito" : "Resumen de la compra"}
        </h1>
        {!summary && !created && (
          <Link className="underline italic text-sm" href={`/checkout`}>
            Editar
          </Link>
        )}
      </header>
      {products.length === 0 && (
        <div className="grid justify-center mt-4">
          <p>El carrito está vacío</p>
          <p className="text-center mt-2">
            <Link className="button-gold" href="/genero/all">
              Ver artículos
            </Link>
          </p>
        </div>
      )}

      <div className="flex flex-wrap md:flex-row gap-4 mt-4">
        {products.map((product) => (
          <CartProductSummaryDetail
            product={product}
            key={product.product.id}
          />
        ))}
      </div>
    </section>
  );
};
