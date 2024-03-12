"use client";
import { Product } from "@/interfaces/product";
import { useCartStore, usePaymentStore } from "@/store";
import clsx from "clsx";

export const AddProductCart = ({
  items,
  product,
}: {
  items: number;
  product: Product;
}) => {
  const setItemsCount = useCartStore((state) => state.setItemsCount);
  const created = usePaymentStore((state) => state.created);

  const increment = () => {
    setItemsCount(items + 1, product);
  };

  const decrement = () => {
    if (items === 1) {
      setItemsCount(1, product);
      return;
    }
    setItemsCount(items - 1, product);
  };

  const onChange = (value: any) => {
    if (value === "") {
      setItemsCount(1, product);
      return;
    }

    setItemsCount(parseInt(value), product);
  };

  return (
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
        disabled={created}
        type="number"
        className="focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black   flex items-center text-gray-700  outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        value={items}
        onChange={(e) => onChange(e.target.value)}
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
  );
};
