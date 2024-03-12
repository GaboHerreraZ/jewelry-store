import { notFound } from "next/navigation";
import { getUser } from "@/actions";
import { getAddressByUserId } from "@/actions/address";
import { AddressForm } from "@/components/address/AddressForm";

interface Props {
  params: {
    id: string;
  };
}

export default async function MyAddressPage({ params: { id } }: Props) {
  const { id: authId } = await getUser();
  if (!authId) notFound();
  const address = id === "nueva" ? {} : await getAddressByUserId(id);
  return <AddressForm authId={authId} address={address!} />;
}
