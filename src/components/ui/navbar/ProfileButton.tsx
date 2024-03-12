"use client";
import { useProfileStore } from "@/store";
import { FaUser } from "react-icons/fa";

export const ProfileButton = () => {
  const toogleSideMenu = useProfileStore((state) => state.toogleSideMenu);

  return (
    <button onClick={toogleSideMenu} className="z-50 text-gold">
      <FaUser size={25} />
    </button>
  );
};
