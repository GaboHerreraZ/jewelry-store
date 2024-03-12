import { getAllOrders } from "@/actions";
import { OrderGrid } from "@/components/admin";

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function OrdenesPage({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { orders, totalPages } = await getAllOrders({ page, take: 10 });

  return (
    <section className="container md:mx-auto px-2 lg:px-10 mt-5">
      <OrderGrid orders={orders!} totalPages={totalPages} />
    </section>
  );
}
