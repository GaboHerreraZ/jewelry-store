import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import logo from "../../../../public/png/bellarte-icono.png";
import { NavbarLink } from "./NavbarLink";
import { Base } from "@/interfaces/base";
import { NavbarCategories } from "./NavbarCategories";
import { GENDERS } from "@/utils/constant";
import { Profile } from "./Profile";

interface Props {
  subcategories: Base[];
  children: React.ReactNode;
}

export const DesktopMenu = ({ children, subcategories }: Props) => {
  return (
    <div className=" grid w-full">
      <div className="flex py-4 px-10 bg-slate-950 border-b-[1px] border-gold justify-between items-center h-10">
        <div className="flex gap-4 text-gold justify-center items-center">
          <FaFacebook size={20} />
          <FaInstagram size={20} />
        </div>
      </div>
      <div className="p-2 flex justify-center bg-slate-950 pt-5">
        <Image src={logo} alt="Bellarte Joyería" width={150} />
      </div>
      <nav className="flex z-50   w-full sticky top-0  justify-center bg-white ">
        <ul className="text-slate-950 font-bold flex gap-10 text-lg">
          {GENDERS.map((gender) => (
            <NavbarCategories
              key={gender.id}
              subcategories={subcategories}
              label={gender.name}
              gender={gender.id}
            />
          ))}
          <NavbarLink label="Mayoristas" href="mayoristas" />
          <NavbarLink label="Contacto" href="contacto" />
        </ul>
        <Profile />
      </nav>
      {children}
    </div>
  );
};
