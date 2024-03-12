"use client";
import { useCartStore } from "@/store";
import { IoCartOutline } from "react-icons/io5";

export const CartButton = () => {
  const items = useCartStore((state) => state.items);
  const toogleSideMenu = useCartStore((state) => state.toogleSideMenu);

  return (
    <div className="relative flex justify-center items-center">
      <button onClick={toogleSideMenu} className="text-gold">
        <IoCartOutline size={25} />
      </button>
      <div className="absolute font-bold -top-2 -right-2 flex justify-center items-center h-5 w-5 rounded-full bg-slate-950 border-[1px] border-gold text-white ">
        {items}
      </div>
    </div>
  );
};
