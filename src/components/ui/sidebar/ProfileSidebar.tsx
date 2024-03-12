"use client";
import clsx from "clsx";
import Link from "next/link";
import { useProfileStore } from "@/store";
import { IoMdClose } from "react-icons/io";

import { RiContactsFill } from "react-icons/ri";
import { FaClipboardList, FaAddressBook } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { CartButton } from "../navbar/CartButton";
import { SingOutUser } from "./SingOutUser";

interface Props {
  email: string;
}

export const ProfileSidebar = ({ email }: Props) => {
  const isSideMenuOpen = useProfileStore((state) => state.isSideMenuOpen);
  const toogleSideMenu = useProfileStore((state) => state.toogleSideMenu);

  return (
    <div
      className={clsx("fixed h-screen top-0 left-0", {
        " w-screen  z-[100] bg-black/45": isSideMenuOpen,
        "-z-1 ": !isSideMenuOpen,
      })}
    >
      <aside
        className={clsx(
          "w-[280px] border-l-[1px]  border-gold fixed right-0 transition-translate duration-300 h-screen bg-white",
          {
            "translate-x-0": isSideMenuOpen,
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <header className="flex py-2 px-2 border-b-[1px] border-gray-200 pr-5 ">
          <button onClick={toogleSideMenu}>
            <IoMdClose
              size={30}
              className="hover:rotate-45 transition-rotate duration-500 "
            />
          </button>
          <h1 className="text-slate-950 pl-2 text-2xl font-bold">Usuario</h1>
        </header>

        <ul className="mt-10 grid gap-2 ">
          <li className="hover:bg-slate-950 px-10 py-2 hover:text-gold transition-all duration-300 cursor-pointer">
            <Link
              className="flex gap-2"
              href={`/usuario/perfil?email=${email}`}
            >
              <RiContactsFill size={25} />
              <label className="cursor-pointer">Perfil</label>
            </Link>
          </li>
          <li className="hover:bg-slate-950 px-10 py-3 hover:text-gold transition-all duration-300 cursor-pointer">
            <Link className="flex gap-2" href={`/checkout`}>
              <CartButton />
              <label className="cursor-pointer">Carrito de compras</label>
            </Link>
          </li>
          <li className="hover:bg-slate-950 px-10 py-2 hover:text-gold transition-all duration-300 cursor-pointer">
            <Link className="flex gap-2" href={`/usuario/mis-direcciones`}>
              <FaAddressBook size={25} />
              <label className="cursor-pointer">Mis Direcciones</label>
            </Link>
          </li>
          <li className="hover:bg-slate-950 px-10 py-2 hover:text-gold transition-all duration-300 cursor-pointer">
            <Link className="flex gap-2" href={`/usuario/historial-pedidos`}>
              <FaClipboardList size={25} />
              <label className="cursor-pointer">Historial de Pedidos</label>
            </Link>
          </li>
          <li className="hover:bg-slate-950 px-10 py-2 hover:text-gold transition-all duration-300 cursor-pointer">
            <Link className="flex gap-2" href={`/usuario/mis-deseados`}>
              <FaHeart size={25} />
              <label className="cursor-pointer">Deseados</label>
            </Link>
          </li>
          <li className="hover:bg-slate-950 px-10 py-2 hover:text-gold transition-all duration-300 cursor-pointer">
            <SingOutUser />
          </li>
        </ul>
      </aside>
      <div
        onClick={toogleSideMenu}
        className="w-[calc(100% - 280px)] h-screen"
      ></div>
    </div>
  );
};
