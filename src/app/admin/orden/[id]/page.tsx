import { getOrderById } from "@/actions";
import { Order } from "@/components/admin";

export default async function OrdenPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const order = await getOrderById(id);

  return <Order order={order!} />;
}
