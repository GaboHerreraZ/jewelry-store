import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import logo from "../../../../public/png/Logo_negro.png";
import { NavbarLink } from "./NavbarLink";
import { Base } from "@/interfaces/base";
import { NavbarCategories } from "./NavbarCategories";
import { GENDERS } from "@/utils/constant";
import { Profile } from "./Profile";
import Link from "next/link";

interface Props {
  subcategories: Base[];
  children: React.ReactNode;
}

export const DesktopMenu = ({ children, subcategories }: Props) => {
  return (
    <div className=" grid w-full">
      <div className="flex py-4 px-10 border-b-[1px] border-gold justify-between items-center h-10">
        <div className="flex gap-4 justify-center items-center">
          <FaFacebook size={20} />
          <FaInstagram size={20} />
        </div>
      </div>
      <div className="p-2 flex justify-center  pt-5">
        <Link href="/">
          <Image src={logo} alt="Bellarte Joyería" width={150} />
        </Link>
      </div>
      <nav className="flex h-10   z-50 shadow-custom-bottom w-full sticky top-0  justify-center bg-white ">
        <ul className="text-slate-950  font-bold flex gap-10 text-lg">
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
        <Profile className="absolute top-3 right-10" />
      </nav>
      {children}
    </div>
  );
};
