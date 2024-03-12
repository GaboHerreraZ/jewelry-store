import { getOrder } from "@/actions";
import { OrderDetail } from "@/components";

interface Props {
  params: {
    id: string;
  };
}

export default async function MyOrder({ params: { id } }: Props) {
  const order = await getOrder(id);

  return <OrderDetail order={order} />;
}
