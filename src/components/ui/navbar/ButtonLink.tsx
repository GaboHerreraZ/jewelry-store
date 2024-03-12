"use client";

import { usePathname, useRouter } from "next/navigation";

export const ButtonLink = ({
  label,
  gender,
}: {
  label: string;
  gender: string;
}) => {
  const router = useRouter();

  const handleGender = () => {
    router.replace(`/genero/${gender}`);
  };

  return (
    <button
      onClick={handleGender}
      className={`peer hover:scale-105 box-content transition-all duration-150 pt-2 after:text-[10px] after:ml-1 hover:text-gold`}
    >
      {label}
    </button>
  );
};
