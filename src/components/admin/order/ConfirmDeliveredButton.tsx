"use client";

import { updateOrderDelivered } from "@/actions";
import { useLoadingStore } from "@/store";
import { toastError, toastSuccess } from "@/utils/notifications";

export const ConfirmDeliveredButton = ({ orderId }: { orderId: string }) => {
  const toggleLoading = useLoadingStore((state) => state.toggleLoading);

  const handleDelivered = async () => {
    toggleLoading(true);

    try {
      await updateOrderDelivered(orderId);

      toastSuccess("Se ha confirmado la entrega");
    } catch (error) {
      toastError("Error al confirmar la entrega");
    }

    toggleLoading(false);
  };

  return (
    <div className="self-end">
      <button className="button-gold" onClick={handleDelivered}>
        Confirmar Entrega
      </button>
    </div>
  );
};
