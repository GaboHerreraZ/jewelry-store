"use client";
import { useNavbarStore } from "@/store/navbar/navbar-store";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  label: string;
  href: string;
  subLink?: boolean;
  gender?: string;
  className?: string;
  desktop?: boolean;
}

export const NavbarLink = ({
  label,
  href,
  subLink = false,
  gender,
  className,
  desktop = true,
}: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const toogleSideMenu = useNavbarStore((state) => state.toogleSideMenu);

  const createUrlPath = () => {
    if (!subLink) {
      router.replace(`/${href}`);
      if (!desktop) toogleSideMenu();
      return;
    }

    const params = new URLSearchParams(searchParams);
    params.set("subcategoria", href);

    const url = `/genero/${gender}?${params.toString()}`;
    router.replace(url);
  };

  return (
    <li
      onClick={createUrlPath}
      className={clsx(
        "cursor-pointer hover:text-gold border-b-gold transition-all duration-150",
        className
      )}
    >
      {label}
    </li>
  );
};
