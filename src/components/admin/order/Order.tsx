import { OrderCheckout } from "@/interfaces/orderCheckout";
import { dateFormat } from "@/utils";
import {
  ORDER_STATUS,
  OrderStatus,
  SHIPIING_STATUS,
  ShippingStatus,
} from "@/utils/constant";
import { currencyFormat } from "@/utils/currenyFormat";
import clsx from "clsx";
import { OrderProductGrid } from "./OrderProductGrid";
import Link from "next/link";
import { TrackingOrder } from "./TrackingOrder";
import { ConfirmDeliveredButton } from "./ConfirmDeliveredButton";

export const Order = ({ order }: { order: OrderCheckout }) => {
  return (
    <section className="container md:mx-auto px-2 lg:px-10 mt-5">
      <header className="flex justify-between items-center border-b-[1px] border-gray-300">
        <h1 className="text-xl font-extrabold mb-5 uppercase">Detalle Orden</h1>
        <Link className="italic underline " href="/admin/ordenes">
          Volver
        </Link>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-4">
        <div className="">
          <label className="text-md font-bold">Email Contacto:</label>
          <p>{order.address.email}</p>
        </div>
        <div className="">
          <label className="text-md font-bold">Teléfono Contacto:</label>
          <p>{order.address.phone}</p>
        </div>

        <div className="">
          <label className="text-md font-bold">Dirección:</label>
          <p>{`${order.address.address?.address} ${order.address.address?.additional}`}</p>
        </div>

        <div className="">
          <label className="text-md font-bold">Total:</label>
          <p className="text-gold font-bold text-xl">
            {currencyFormat(order.total)}
          </p>
        </div>

        <div className="">
          <label className="text-md font-bold">Estado:</label>
          <p>
            <span
              className={clsx("mt-1 px-2 rounded-full", {
                "bg-green-500 text-green-800":
                  order.shippingStatus === ShippingStatus.delivered,
                "bg-red-500 text-red-950 ":
                  order.shippingStatus === ShippingStatus.inProgress,
                "bg-yellow-500 text-yellow-800":
                  order.shippingStatus === ShippingStatus.shipped,
              })}
            >
              {SHIPIING_STATUS.find((o) => o.id === order.shippingStatus)?.name}
            </span>
          </p>
        </div>

        <div className="">
          <label className="text-md font-bold">Estado Pago:</label>
          <p>
            <span
              className={clsx("mt-1 px-2 rounded-full", {
                "bg-green-500 text-green-800":
                  order.status === OrderStatus.paid,
                "bg-red-500 text-red-950 ":
                  order.status === OrderStatus.pending,
              })}
            >
              {ORDER_STATUS.find((o) => o.id === order.status)?.name}
            </span>
          </p>
        </div>

        <div className="">
          <label className="text-md font-bold">Id de Pago:</label>
          <p>{order.paymentId}</p>
        </div>

        <div className="">
          <label className="text-md font-bold">Método de Pago:</label>
          <p>{order.paymentMethod}</p>
        </div>

        <div className="">
          <label className="text-md font-bold">Fecha Creación:</label>
          <p>{dateFormat(order.createdAt, "es")}</p>
        </div>

        <TrackingOrder
          orderId={order.id!}
          trackingLink={order.trackingLink!}
          status={order.shippingStatus}
        />

        {order.shippingStatus !== ShippingStatus.delivered && (
          <ConfirmDeliveredButton orderId={order.id!} />
        )}
      </div>

      <OrderProductGrid products={order.items} />
    </section>
  );
};
