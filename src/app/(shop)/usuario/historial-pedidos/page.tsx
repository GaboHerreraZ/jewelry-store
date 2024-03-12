import { getOrders, getUser } from "@/actions";
import { OrderGrid } from "@/components";
import { redirect } from "next/navigation";

export default async function OrderPage() {
  const { id } = await getUser();

  if (!id) redirect("/auth/login");

  const orders = await getOrders(id);

  return <OrderGrid orders={orders} />;
}
