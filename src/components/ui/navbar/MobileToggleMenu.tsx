"use client";
import { useNavbarStore } from "@/store/navbar/navbar-store";
import { NavbarLink } from "./NavbarLink";

export const MobileToggleMenu = () => {
  const isSideMenuOpen = useNavbarStore((state) => state.isSideMenuOpen);

  return (
    <div
      className={`${
        isSideMenuOpen ? `translate-x-0  ` : ` -translate-x-full`
      } transition-all duration-500 absolute top-0  w-full`}
    >
      <ul
        className={`text-white flex flex-col  justify-center text-center  bg-slate-950/80 w-full h-screen text-xl`}
      >
        <NavbarLink label="Hombre" href="genero/hombre" />
        <NavbarLink label="Mujer" href="genero/mujer" />
        <NavbarLink label="Niño" href="genero/nino" />
        <NavbarLink label="Mayoristas" href="mayoristas" />
        <NavbarLink label="Contáctanos" href="contacto" />
      </ul>
    </div>
  );
};
