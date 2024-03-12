import { getUser } from "@/actions";
import { Payment } from "@/components";

export default async function PaymentPage() {
  const { id } = await getUser();

  return <Payment authId={id!} />;
}
