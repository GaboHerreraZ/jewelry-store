"use client";

import { usePaymentStore } from "@/store";
import clsx from "clsx";

export const DiscountCode = () => {
  const created = usePaymentStore((state) => state.created);

  return (
    <div className="mt-5 w-full border-t-[1px] border-gray-200 py-5">
      <h1 className="font-bold mb-3">Código de descuento</h1>
      <div className="flex gap-2 w-full">
        <label className="grid w-full">
          <input
            disabled={created}
            type="text"
            className="bg-transparent  shadow border-[0.5px] rounded px-2 py-1 focus:border-gold focus:border-[1px] text-raffle-text outline-none"
            placeholder="Cupón de descuento"
          />
        </label>
        <button
          disabled={created}
          className={clsx("button-gold", {
            "disabled:opacity-25": created,
          })}
        >
          Aplicar
        </button>
      </div>
    </div>
  );
};
