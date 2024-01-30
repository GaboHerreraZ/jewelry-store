"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  label: string;
  href: string;
}

export const NavbarLink = ({ label, href }: Props) => {
  const path: string = usePathname();

  return (
    <li className="hover:scale-105 transition-all duration-500 py-2">
      <Link
        href={`/${href}`}
        className={`py-2 cursor-pointer hover:text-gold border-b-gold transition-all duration-150 ${
          path === `/${href}` ? "border-b-gold border-b-4" : ""
        }`}
      >
        {label}
      </Link>
    </li>
  );
};
