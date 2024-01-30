"use client";
import Image from "next/image";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

import logo from "../../../../public/png/bellarte-icono.png";
import { NavbarLink } from "./NavbarLink";

export const MobileMenu = ({ children }: { children: React.ReactNode }) => {
  const [toggle, setToggle] = useState<boolean>();

  return (
    <>
      <div className="sticky top-0 ">
        <nav className=" relative z-20">
          <header className="grid grid-flow-col z-10 bg-slate-950 items-center text-white w-full p-2 ">
            <button
              className=" flex z-10  items-center text-gold  text-sm"
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? <IoClose size={30} /> : <IoMenu size={30} />}
            </button>
            <div className="flex w-full  justify-self-center flex-row">
              <Image
                className="z-10 "
                src={logo}
                alt="Bellarte Joyería"
                width={100}
              />
            </div>
          </header>
          <div
            className={`${
              toggle ? `translate-x-0  ` : ` -translate-x-full`
            } transition-all duration-500 absolute top-0  w-full`}
          >
            <ul
              className={`text-white flex flex-col  justify-center text-center  bg-slate-950/80 w-full h-screen text-xl`}
            >
              <NavbarLink label="Quiero ser mayorista" href="mayoristas" />
              <NavbarLink label="Catálogo" href="catalogo" />
              <NavbarLink label="Garantía" href="garantia" />
              <NavbarLink label="Contácto" href="contacto" />
            </ul>
          </div>
        </nav>
      </div>

      <div className="h-[1500px]">{children}</div>
    </>
  );
};
