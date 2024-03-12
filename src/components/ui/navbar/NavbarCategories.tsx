import { Base } from "@/interfaces/base";
import { ButtonLink } from "./ButtonLink";
import { NavbarLink } from "./NavbarLink";
import { Gender } from "@/utils/constant";

interface Props {
  subcategories: Base[];
  label: string;
  gender: string;
}

export const NavbarCategories = ({ subcategories, label, gender }: Props) => {
  return (
    <li className="relative">
      <ButtonLink label={label} gender={gender} />
      <nav className="absolute z-50 border-t-[2px] border-t-gold  shadow py-2 px-4 invisible opacity-0  w-[500px] -left-52  peer-hover:visible peer-hover:opacity-100 hover:opacity-100 hover:visible  transition-all duration-500 bg-white">
        <ul className="text-slate-950 grid grid-cols-2">
          {subcategories
            .filter((s) => {
              if (gender !== Gender.kid) return true;
              return (
                gender === Gender.kid &&
                !["Candongas", "Rosarios", "Topitos"].includes(s.name)
              );
            })
            .map((subcategory) => {
              return (
                <NavbarLink
                  key={gender + subcategory.id}
                  label={subcategory.name}
                  gender={gender}
                  href={subcategory.name}
                  subLink={true}
                />
              );
            })}
        </ul>
      </nav>
    </li>
  );
};
