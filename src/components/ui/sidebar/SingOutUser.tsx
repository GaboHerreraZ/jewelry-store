"use client";

import { useRouter } from "next/navigation";
import { SingOutButton } from "./SingOutButton";
import { useCartStore, useProfileStore } from "@/store";

export const SingOutUser = () => {
  const toogleSideMenu = useProfileStore((state) => state.toogleSideMenu);
  const reset = useCartStore((state) => state.reset);
  const router = useRouter();

  const handleSignOut = async () => {
    toogleSideMenu();
    reset();
    router.replace("/");
    router.refresh();
  };

  return <SingOutButton onClick={handleSignOut} />;
};
