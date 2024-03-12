"use client";
import { MdDone } from "react-icons/md";
import { Address } from "@/interfaces/address";
import { useCartStore, usePaymentStore } from "@/store";
import clsx from "clsx";
import { useEffect } from "react";

export const ShippingAddress = ({ address }: { address: Address }) => {
  const addressCart = useCartStore((state) => state.address);
  const setAddress = useCartStore((state) => state.setAddress);
  const created = usePaymentStore((state) => state.created);

  const handleAddress = () => {
    if (created) return;
    setAddress(address);
  };

  useEffect(() => {
    if (Object.keys(addressCart).length === 0 && address.main && !created) {
      setAddress(address);
    }
  }, [addressCart, created, address, setAddress]);

  return (
    <div
      onClick={handleAddress}
      className={clsx(
        "flex justify-center items-center gap-2 cursor-pointer border-[1px]  min-w-[280px] md:min-w-[350px]   px-5 py-5 rounded transition-all duration-300",
        {
          "border-gold": addressCart?.id === address.id,
          "border-slate-950": addressCart?.id !== address.id,
        }
      )}
    >
      <div className="grid">
        <h1 className="font-bold py-2 text-xl">
          {address.name} {address.lastName}
        </h1>
        <p className="text-md">
          {address.address} {address.additional}
        </p>
        <p className="text-sm">
          {address.department}, {address.city}
        </p>
      </div>
      {addressCart?.id === address.id && (
        <MdDone className="text-gold" size={30} />
      )}
    </div>
  );
};
