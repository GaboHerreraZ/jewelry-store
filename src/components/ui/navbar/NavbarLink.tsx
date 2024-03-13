"use client";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  label: string;
  href: string;
  subLink?: boolean;
  gender?: string;
}

export const NavbarLink = ({ label, href, subLink = false, gender }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createUrlPath = () => {
    if (!subLink) {
      router.replace(`/${href}`);
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
      className="flex items-center h-full cursor-pointer hover:text-gold border-b-gold transition-all duration-150"
    >
      {label}
    </li>
  );
};
