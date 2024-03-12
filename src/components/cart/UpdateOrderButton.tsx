import { usePaymentStore } from "@/store";

export const UpdateOrderButton = () => {
  const updatePayment = usePaymentStore((state) => state.updatePayment);

  const handleUpdate = () => {
    updatePayment(false);
  };

  return (
    <button type="button" onClick={handleUpdate} className="button-gold">
      Modificar Compra
    </button>
  );
};
