"use client";

import { useNavbarStore } from "@/store/navbar/navbar-store";
import { IoClose, IoMenu } from "react-icons/io5";

export const MobileToggleButton = () => {
  const toggle = useNavbarStore((state) => state.toogleSideMenu);
  const isSideMenuOpen = useNavbarStore((state) => state.isSideMenuOpen);

  return (
    <button
      className=" flex z-10  items-center text-slate-950 text-sm"
      onClick={() => toggle()}
    >
      {isSideMenuOpen ? (
        <IoClose className="text-white" size={30} />
      ) : (
        <IoMenu size={30} />
      )}
    </button>
  );
};
