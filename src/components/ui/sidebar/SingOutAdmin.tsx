"use client";

import { useRouter } from "next/navigation";
import { SingOutButton } from "./SingOutButton";

export const SingOutAdmin = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    router.replace("/");
    router.refresh();
  };

  return <SingOutButton onClick={handleSignOut} />;
};
