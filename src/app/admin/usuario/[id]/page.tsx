import { getOrdersByUser, getUserByAuthId } from "@/actions";
import { OrderGridUser, WholesalerButton } from "@/components/admin";
import { Profile } from "@/components/profile";

export default async function UsuarioPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const user = await getUserByAuthId(id);
  const orders = await getOrdersByUser(id);

  return (
    <section className="container md:mx-auto px-2 lg:px-10 mt-5">
      <WholesalerButton authId={id} wholesaler={user!.wholesaler} />
      <Profile user={user!} disabled />
      <OrderGridUser orders={orders!} />
    </section>
  );
}
