import { OrderCheckout } from "@/interfaces/orderCheckout";
import { Order } from "./Order";

export const OrderGrid = ({ orders }: { orders: OrderCheckout[] }) => {
  return (
    <section className=" grid mt-5 md:mt-20 justify-center ">
      <header className="pb-5 font-bold text-3xl">
        <h1>Historial de Pedidos</h1>
      </header>
      {orders.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </section>
  );
};
