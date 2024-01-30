import Image from "next/image";
import logo from "../../../../public/png/bellarte-icono.png";
import { NavbarLink } from "./NavbarLink";
import { ButtonLink } from "./ButtonLink";

export const DesktopMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" grid  w-full">
      <div className="p-2 flex justify-center bg-slate-950 pt-5">
        <Image src={logo} alt="Bellarte Joyería" width={150} />
      </div>
      <nav className="grid  w-full sticky top-0  justify-center ">
        <ul className="text-slate-950 font-bold flex gap-10 text-lg">
          <NavbarLink label="Quiero ser mayorista" href="mayoristas" />
          <li className="relative  ">
            <ButtonLink label="Catálogo" />
            <nav className="absolute border-t-[1px]  z-0 border-gold bg-slate-950 invisible opacity-0  w-[500px] -left-52  peer-hover:visible peer-hover:opacity-100 hover:opacity-100 hover:visible  transition-all duration-500 ease-in-out">
              <ul className="flex justify-evenly gap-5 w-full  py-2 text-white ">
                <NavbarLink
                  label="Oro laminado"
                  href="catalogo?categoria=oro laminado"
                />
                <NavbarLink
                  label="Plata 925"
                  href="catalogo?categoria=plata 925"
                />

                <NavbarLink
                  label="Bisutería"
                  href="catalogo?categoria=bisuteria"
                />
              </ul>
            </nav>
          </li>
          <NavbarLink label="Garantía" href="garantia" />
          <NavbarLink label="Contácto" href="contacto" />
        </ul>
      </nav>
      {children}
    </div>
  );
};
