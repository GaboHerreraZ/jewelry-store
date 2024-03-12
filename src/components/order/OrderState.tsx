"use client";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { BiLinkExternal } from "react-icons/bi";
import { OrderCheckout } from "@/interfaces/orderCheckout";
import { useCartStore, usePaymentStore } from "@/store";
import { Address } from "@/interfaces/address";

export const OrderState = ({ order }: { order: OrderCheckout }) => {
  const setOrderPending = useCartStore((state) => state.setOrderPending);
  const setOrder = usePaymentStore((state) => state.setOrder);
  const router = useRouter();

  const handlePayment = () => {
    const items: number = order.items.reduce(
      (prev, acc) => acc.quantity + prev,
      0
    );
    const address: Address = order.address.address!;
    const contactInfo = {
      email: order.address.email,
      phone: order.address.phone,
    };
    const products = order.items.map((item) => ({
      items: item.quantity,
      product: item.product,
    }));

    setOrderPending(items, address, contactInfo, products);
    setOrder(order);

    router.replace("/checkout/pago");
  };

  return (
    <>
      {order.shippingStatus === "delivered" && (
        <div className="w-full">
          <Link
            className={clsx("w-full text-md flex items-center", {})}
            href={order.trackingLink || ""}
            target="_blank"
          >
            <h1>Seguimiento del pedido</h1>
            <BiLinkExternal />
          </Link>
        </div>
      )}
      {order.shippingStatus === "inProgress" && (
        <div>
          <button type="button" onClick={handlePayment} className="button-gold">
            Proceder al pago
          </button>
        </div>
      )}
    </>
  );
};
