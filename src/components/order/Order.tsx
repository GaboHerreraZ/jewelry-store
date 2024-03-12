"use client";
import { useRouter } from "next/navigation";
import { MdLocalShipping } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { OrderCheckout } from "@/interfaces/orderCheckout";
import { ProductImage } from "./ProductImage";
import { currencyFormat } from "@/utils/currenyFormat";
import { dateFormat } from "@/utils";

export const Order = ({ order }: { order: OrderCheckout }) => {
  const router = useRouter();

  const handleOrder = () => {
    router.replace(`/usuario/mi-pedido/${order.id}`);
  };

  return (
    <div
      onClick={handleOrder}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full border-t-[1px] py-5 border-gray-200  cursor-pointer"
    >
      <ProductImage items={order.items} />
      <div className="w-full md:px-5 text-sm">
        <p className="font-extrabold">{dateFormat(order.createdAt, "es")}</p>
        <p>
          <span className="font-bold">Ref:</span>
          {order.id}
        </p>
        <p className="text-gold font-bold">{currencyFormat(order.total)}</p>
      </div>
      <div className="flex justify-between w-full md:px-5 text-sm">
        <div className="">
          <div className="flex items-center">
            <MdLocalShipping />
            <h3 className="font-bold ml-1">Estado de envio:</h3>
          </div>
          <p>
            {order.shippingStatus === "inProgress"
              ? "En Progreso"
              : order.shippingStatus === "delivered"
              ? "Enviado"
              : "Recibido"}
          </p>
        </div>
        <MdKeyboardArrowRight className="ml-10 self-center" size={30} />
      </div>
    </div>
  );
};
