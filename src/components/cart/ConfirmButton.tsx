"use client";

import { createOrder } from "@/actions";
import { useCartStore, useLoadingStore, usePaymentStore } from "@/store";
import { OrderCheckout } from "@/interfaces/orderCheckout";
import { OrderStatus, ShippingStatus } from "@/utils/constant";
import { toastError } from "@/utils/notifications";
import { currencyFormat } from "@/utils/currenyFormat";

export const ConfirmButton = ({
  authId,
  wholesaler,
}: {
  authId: string;
  wholesaler: boolean;
}) => {
  const address = useCartStore((state) => state.address);
  const getTotal = useCartStore((state) => state.getTotal);
  const products = useCartStore((state) => state.products);
  const toggleLoading = useLoadingStore((state) => state.toggleLoading);
  const contactInfo = useCartStore((state) => state.contactInfo);
  const items = useCartStore((state) => state.items);
  const shippingCost = useCartStore((state) => state.shippingCost);

  const setPayment = usePaymentStore((state) => state.setPayment);
  const order = usePaymentStore((state) => state.order);

  const getDisabled = () => {
    return (
      Object.keys(address).length > 0 &&
      contactInfo.email.length > 0 &&
      contactInfo.phone.length > 0 &&
      items > 0 &&
      shippingCost > 0
    );
  };

  const handleOrder = async () => {
    if (wholesaler && getTotal() < 1000000) {
      toastError(
        `El valor mínimo de compra para mayoristas es de ${currencyFormat(
          1000000
        )}`
      );
      return;
    }

    const orderToSend: OrderCheckout = {
      id: order?.id,
      status: OrderStatus.pending,
      isPaid: false,
      createdAt: new Date(),
      total: getTotal(),
      items: products.map((product) => {
        return {
          quantity: product.items,
          price: product.product.detailPrice,
          createdAt: new Date(),
          productId: product.product.id,
        };
      }),
      address: {
        email: contactInfo.email,
        phone: contactInfo.phone,
        addressId: address.id,
        orderId: order?.id,
      },
      userId: authId,
      shippingStatus: ShippingStatus.inProgress,
    };

    toggleLoading(true);
    const response = await createOrder(orderToSend);
    if (response.ok) {
      setPayment(
        response.order!,
        response.publicKey!,
        response.integritySecret!,
        true
      );
    }

    toggleLoading(false);
  };

  return (
    <div className="flex justify-end ">
      <button
        onClick={handleOrder}
        disabled={!getDisabled()}
        className="button-gold disabled:opacity-25"
      >
        Confirmar Compra
      </button>
    </div>
  );
};
