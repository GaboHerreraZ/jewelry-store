"use client";
import { useCartStore, usePaymentStore } from "@/store";
import { currencyFormat } from "@/utils/currenyFormat";
import { DiscountCode } from "./DiscountCode";
import { ShippingCosts } from "./ShippingCosts";
import { WompiButton } from "./WompiButton";

export const CartSummary = () => {
  const getTotal = useCartStore((state) => state.getTotal);
  const getSubTotal = useCartStore((state) => state.getSubTotal);

  const products = useCartStore((state) => state.products);
  const address = useCartStore((state) => state.address);

  const created = usePaymentStore((state) => state.created);
  const integritySecret = usePaymentStore((state) => state.integritySecret);
  const publicKey = usePaymentStore((state) => state.publicKey);
  const order = usePaymentStore((state) => state.order);

  return (
    <div className="w-full  bg-gray-200/25 p-10 rounded">
      <h1 className="font-bold text-xl py-5">Detalles de compra</h1>
      <ul className="mt-2 border-b-[1px] border-gray-200 pb-10">
        <li className="flex justify-between">
          <label>Subtotal</label>
          <label>{currencyFormat(getSubTotal())}</label>
        </li>

        {Object.keys(address).length > 0 && <ShippingCosts />}
      </ul>

      <div className="flex pt-5 justify-between font-bold">
        <label className=" text-2xl">Total</label>
        <label>{currencyFormat(getTotal())}</label>
      </div>

      {products.length > 0 && <DiscountCode />}

      {created && (
        <div id="wompi-payment-button" className="mt-4">
          <WompiButton
            integrity={integritySecret}
            orderId={order.id!}
            total={order.total}
            publicKey={publicKey}
          />
        </div>
      )}
    </div>
  );
};
