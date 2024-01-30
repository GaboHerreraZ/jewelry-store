"use client";

import { usePathname } from "next/navigation";

export const ButtonLink = ({ label }: { label: string }) => {
  const path = usePathname();

  return (
    <button
      className={`peer hover:scale-105 box-content transition-all duration-150 pt-2 after:text-[10px] after:ml-1 hover:text-gold 
      ${path === `/catalogo` ? " pb-[0.20rem] border-b-gold border-b-4" : ""}
      `}
    >
      {label}
    </button>
  );
};
