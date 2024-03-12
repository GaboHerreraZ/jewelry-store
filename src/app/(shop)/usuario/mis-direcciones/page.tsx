import { notFound } from "next/navigation";

import { getUser } from "@/actions";
import { getAddress } from "@/actions/address";
import { AddressGrid } from "@/components/address";

export default async function AddressPage() {
  const { id } = await getUser();

  if (!id) notFound();

  const addresses = await getAddress(id);

  return <AddressGrid addresses={addresses} />;
}
