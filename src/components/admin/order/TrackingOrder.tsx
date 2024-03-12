"use client";
import { useState } from "react";
import { FaSave } from "react-icons/fa";
import { updateOrderTrackingList } from "@/actions";
import Input from "@/components/ui/input/Input";
import { toastError, toastSuccess } from "@/utils/notifications";
import { useLoadingStore } from "@/store";
import { ShippingStatus } from "@/utils/constant";

export const TrackingOrder = ({
  orderId,
  trackingLink,
  status,
}: {
  orderId: string;
  trackingLink: string;
  status: ShippingStatus;
}) => {
  const toggleLoading = useLoadingStore((state) => state.toggleLoading);
  const [trackingList, setTrackingList] = useState<string>(trackingLink);

  const handleTrackingLink = (e: any) => {
    setTrackingList(e.target.value);
  };

  const handleSubmitTracking = async () => {
    toggleLoading(true);
    try {
      await updateOrderTrackingList(orderId, trackingList);
      toastSuccess("Se ha actualizado el link de seguimiento");
    } catch (error) {
      toastError("Error al actualizar el link de seguimiento");
    }
    toggleLoading(false);
  };

  return (
    <div className="flex gap-2 ">
      <Input
        disabled={status === ShippingStatus.delivered}
        type="text"
        value={trackingList}
        onChange={handleTrackingLink}
        placeholder="Link Seguimiento de envío"
      />
      {status !== ShippingStatus.delivered && (
        <button
          onClick={handleSubmitTracking}
          type="button"
          disabled={!!trackingList && trackingList.length === 0}
          className="text-gold self-end"
        >
          <FaSave size={25} />
        </button>
      )}
    </div>
  );
};
