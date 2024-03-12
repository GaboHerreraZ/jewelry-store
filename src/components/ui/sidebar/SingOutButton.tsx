"use client";

import { useLoadingStore } from "@/store";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { FaPowerOff } from "react-icons/fa";

export const SingOutButton = ({ onClick }: { onClick: () => void }) => {
  const supabase = createClientComponentClient();
  const tooggleLoading = useLoadingStore((state) => state.toggleLoading);

  const handleSignOut = async () => {
    tooggleLoading(true);
    await supabase.auth.signOut();
    tooggleLoading(false);
    onClick();
  };

  return (
    <button onClick={handleSignOut} className="text-gold mt-0 flex gap-2">
      <FaPowerOff size={25} />
      <label className="cursor-pointer">Cerrar Sesión</label>
    </button>
  );
};
