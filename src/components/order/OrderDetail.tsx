import Link from "next/link";
import { OrderCheckout } from "@/interfaces/orderCheckout";
import { dateFormat } from "@/utils";
import { OrderDetailProduct } from "./OrderDetailProduct";
import { OrderState } from "./OrderState";

export const OrderDetail = ({ order }: { order: OrderCheckout }) => {
  return (
    <section className="mt-5 md:mt-20 px-2  md:px-0 grid justify-center">
      <header className="flex flex-col gap-5  border-b-[1px] border-gray-200 pb-5">
        <h1 className="text-3xl font-bold">Detalle del pedido</h1>
        <OrderState order={order} />
      </header>
      <div className="flex items-center mt-5">
        <div>
          <p className="font-bold">
            {order.shippingStatus === "inProgress"
              ? "En Progreso"
              : order.shippingStatus === "delivered"
              ? "Enviado"
              : "Recibido"}
          </p>
          <p>
            Pedido realizado el <span>{dateFormat(order.createdAt, "es")}</span>
          </p>
          <p>
            <span className="font-bold mr-1">Ref:</span>
            {order.id}
          </p>
        </div>
      </div>
      <div className="mt-10">
        {order.items.map((item) => (
          <OrderDetailProduct
            key={item.id}
            item={item}
            address={order.address}
          />
        ))}
      </div>
    </section>
  );
};
