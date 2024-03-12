import { getOrdersByUser, getUserByAuthId } from "@/actions";
import { OrderGridUser } from "@/components/admin";
import { Profile } from "@/components/profile";

export default async function UsuarioPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const user = await getUserByAuthId(id);
  const orders = await getOrdersByUser(id);

  console.log(id);

  console.log(orders);

  return (
    <section className="container md:mx-auto px-2 lg:px-10 mt-5">
      <Profile user={user!} disabled />
      <OrderGridUser orders={orders!} />
    </section>
  );
}
