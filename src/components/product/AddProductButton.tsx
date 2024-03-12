"use client";
import { Product } from "@/interfaces/product";
import { usePaymentStore } from "@/store";
import { useCartStore } from "@/store/cart/cart-store";
import { toastSuccess } from "@/utils/notifications";
import clsx from "clsx";
import { useState } from "react";

interface Props {
  product: Product;
}

export const AddProductButton = ({ product }: Props) => {
  const setItemsCount = useCartStore((state) => state.setItemsCount);
  const created = usePaymentStore((state) => state.created);
  const [items, setItems] = useState<number>(1);

  const increment = () => {
    setItems((state) => state + 1);
  };

  const decrement = () => {
    if (items === 1) {
      setItems(1);
      return;
    }
    setItems((state) => state - 1);
  };

  const handleAddCart = () => {
    setItemsCount(items, product);
    toastSuccess("Artículo agregado al carrito");
  };

  const handleInputChange = (e: any) => {
    const inputValue = Number(e.target.value);
    if (inputValue < 1) {
      setItems(1);
      return;
    }

    setItems(inputValue);
  };

  return (
    <div className="flex gap-5 mt-4">
      <div className="flex w-24  flex-row h-10 justify-center  relative bg-transparent">
        <button
          disabled={created}
          onClick={decrement}
          className={clsx(
            "bg-white text-slate-950 flex justify-center items-center border-[1px] border-gold h-full w-20  cursor-pointer outline-none",
            {
              "disabled:opacity-25": created,
            }
          )}
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          onChange={handleInputChange}
          disabled={created}
          type="number"
          className="focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black   flex items-center text-gray-700  outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          value={items}
        />
        <button
          disabled={created}
          onClick={increment}
          className={clsx(
            "bg-white text-slate-950 border-[1px] border-gold  h-full w-20  cursor-pointer",
            {
              "disabled:opacity-25": created,
            }
          )}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
      <button type="button" onClick={handleAddCart} className="button-gold">
        Agregar al carrito
      </button>
    </div>
  );
};
