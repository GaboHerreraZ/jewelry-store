"use client";

import { Product } from "@/interfaces/product";
import { useCartStore, usePaymentStore } from "@/store";
import { toastSuccess } from "@/utils/notifications";
import clsx from "clsx";

export const ButtonAddCart = ({ product }: { product: Product }) => {
  const setItemsCount = useCartStore((state) => state.setItemsCount);
  const products = useCartStore((state) => state.products);

  const created = usePaymentStore((state) => state.created);

  const handleAddCart = () => {
    const findProduct = products.find((p) => p.product.id === product.id);
    if (findProduct) {
      toastSuccess("Artículo ya fue agregado al carrito");
      return;
    }

    setItemsCount(1, product);
    toastSuccess("Artículo agregado al carrito");
  };

  return (
    <button
      disabled={created}
      onClick={handleAddCart}
      className={clsx(
        "hover:-translate-y-1  transition-translate duration-500  px-4 w-full flex justify-center",
        {
          "disabled:opacity-25": created,
        }
      )}
    >
      <span className="px-4 py-1 w-full text-center bg-slate-950 text-white font-bold  ">
        Agregar al carrito
      </span>
    </button>
  );
};
