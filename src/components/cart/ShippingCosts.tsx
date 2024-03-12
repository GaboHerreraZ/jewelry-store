"use client";
import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils/currenyFormat";
import { useEffect } from "react";

export const ShippingCosts = () => {
  const address = useCartStore((state) => state.address);
  const shippingCost = useCartStore((state) => state.shippingCost);
  const setShippingCost = useCartStore((state) => state.setShippingCost);

  useEffect(() => {
    setShippingCost(12500);
  }, [address, setShippingCost]);

  return (
    <li className="flex justify-between">
      <label>Gastos de envío</label>
      <label>{currencyFormat(shippingCost)}</label>
    </li>
  );
};
