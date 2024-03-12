import { getUser } from "@/actions";
import { getAddress } from "@/actions/address";
import { Shipping } from "@/components/cart/Shipping";

export default async function ShippingPage() {
  const { id } = await getUser();

  const addresses = await getAddress(id!);
  return <Shipping addresses={addresses} authId={id!} />;
}
