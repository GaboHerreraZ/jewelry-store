"use client";
import { useSidebarStore } from "@/store";
import { IoMenu } from "react-icons/io5";
import { SingOutAdmin } from "./SingOutAdmin";

export const TopeMenu = ({ children }: { children: React.ReactNode }) => {
  const toggleSideMenu = useSidebarStore((state) => state.toogleSideMenu);

  return (
    <div className="block w-full min-h-screen">
      <nav className="flex  justify-between bg-slate-950 w-full px-2 md:px-5 py-2">
        <div className="  text-title ">
          <button onClick={toggleSideMenu} className="px-1 text-gold">
            <IoMenu size={30} />
          </button>
        </div>

        <SingOutAdmin />
      </nav>
      <main className="scroll-smooth overflow-hidden w-full  ">{children}</main>
    </div>
  );
};
