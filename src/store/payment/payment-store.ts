import { OrderCheckout } from "@/interfaces/orderCheckout";
import { create } from "zustand";

interface State {
  order: OrderCheckout;
  publicKey: string;
  integritySecret: string;
  created: boolean;
  setPayment: (
    order: OrderCheckout,
    publicKey: string,
    integritySecret: string,
    created: boolean
  ) => void;
  updatePayment: (created: boolean) => void;
  setOrder: (order: OrderCheckout) => void;
}

export const usePaymentStore = create<State>()((set) => ({
  order: {} as OrderCheckout,
  publicKey: "",
  integritySecret: "",
  created: false,
  setPayment: (order, publicKey, integritySecret, created) =>
    set({ order, publicKey, integritySecret, created }),
  updatePayment: (created) => set({ created }),
  setOrder: (order) => set({ order }),
}));
