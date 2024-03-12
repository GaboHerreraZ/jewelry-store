"use client";

import { useRouter } from "next/navigation";
import { SingOutButton } from "./SingOutButton";
import { useProfileStore } from "@/store";

export const SingOutUser = () => {
  const toogleSideMenu = useProfileStore((state) => state.toogleSideMenu);
  const router = useRouter();

  const handleSignOut = async () => {
    toogleSideMenu();
    router.replace("/");
    router.refresh();
  };

  return <SingOutButton onClick={handleSignOut} />;
};
