"use client";

import { updateWholesaler } from "@/actions";
import { useLoadingStore } from "@/store";
import { toastError, toastSuccess } from "@/utils/notifications";
import { useRouter } from "next/navigation";

export const WholesalerButton = ({
  authId,
  wholesaler,
}: {
  authId: string;
  wholesaler: boolean;
}) => {
  const toggleLoading = useLoadingStore((state) => state.toggleLoading);
  const router = useRouter();

  const handleWholesaler = async () => {
    toggleLoading(true);
    try {
      await updateWholesaler(authId);
      toastSuccess("Mayorista actualizado");
      router.prefetch(`/admin/usuario/${authId}`);
    } catch (e) {
      toastError("Error al actualizar mayorista");
    }
    toggleLoading(false);
  };

  return (
    <div className="flex justify-end my-2">
      <button type="button" onClick={handleWholesaler} className="button-gold">
        {wholesaler ? "Deshabilitar mayorista" : "Habilitar mayorista"}
      </button>
    </div>
  );
};
