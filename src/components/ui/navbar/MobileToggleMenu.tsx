"use client";
import { useNavbarStore } from "@/store/navbar/navbar-store";
import { NavbarLink } from "./NavbarLink";

export const MobileToggleMenu = () => {
  const isSideMenuOpen = useNavbarStore((state) => state.isSideMenuOpen);

  return (
    <div
      className={`${
        isSideMenuOpen ? `translate-x-0  ` : ` -translate-x-full`
      } transition-all duration-500 fixed top-0  w-full`}
    >
      <ul
        className={`text-white flex flex-col justify-center gap-10 items-center text-center  bg-slate-950/80 w-full fixed min-h-screen text-xl`}
      >
        <NavbarLink label="Hombre" href="genero/hombre" desktop={false} />
        <NavbarLink label="Mujer" href="genero/mujer" desktop={false} />
        <NavbarLink label="Niño" href="genero/nino" desktop={false} />
        <NavbarLink label="Mayoristas" href="mayoristas" desktop={false} />
        <NavbarLink label="Contáctanos" href="contacto" desktop={false} />
        <li className="mt-10 italic px-5">
          <p className="text-white font-bold">
            La mejor forma de deshacerse de la tentación es caer en ella... en
            una joyería.
          </p>
          <p className="text-center text-gold text-xl">Coco Chanel</p>
        </li>
      </ul>
    </div>
  );
};
