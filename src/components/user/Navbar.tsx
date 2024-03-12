"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="mt-5 md:mt-20 hidden md:block">
      <ul className="font-bold text-xl">
        <li
          className={clsx("py-2", {
            underline: pathName === "/usuario/perfil",
          })}
        >
          <Link href="/usuario/perfil">Perfil</Link>
        </li>
        <li
          className={clsx("py-2", {
            underline: pathName === "/usuario/mis-direcciones",
          })}
        >
          <Link href="/usuario/mis-direcciones">Mis Direcciones</Link>
        </li>
        <li
          className={clsx("py-2", {
            underline: pathName === "/usuario/historial-pedidos",
          })}
        >
          <Link href="/usuario/historial-pedidos">Historial de Pedidos</Link>
        </li>
        <li
          className={clsx("py-2", {
            underline: pathName === "/usuario/mis-deseados",
          })}
        >
          <Link href="/usuario/mis-deseados">Deseados</Link>
        </li>
      </ul>
    </nav>
  );
};
