import { getUser, getUserByAuthId } from "@/actions";
import { Payment } from "@/components";

export default async function PaymentPage() {
  let wholesaler = false;
  const { id } = await getUser();
  if (id) {
    const user = await getUserByAuthId(id);
    wholesaler = user?.wholesaler!;
  }

  return <Payment authId={id!} wholesaler={wholesaler} />;
}
