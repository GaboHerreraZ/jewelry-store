import Link from "next/link";
import { AddressCard } from "./AddressCard";
import { Address } from "@/interfaces/address";

interface Props {
  addresses: Address[];
}

export const AddressGrid = ({ addresses }: Props) => {
  return (
    <section className="grid mt-5 md:mt-20 justify-center ">
      <header className="pb-5 border-b-[1px] border-gray-200 font-bold text-3xl min-w-[280px] md:min-w-[640px]">
        <h1 className="">Direcciones</h1>
      </header>

      <div className="flex gap-10">
        {addresses.map((address) => (
          <AddressCard key={address.id} address={address} />
        ))}
      </div>

      <footer className="text-end mt-5">
        <Link className="button-gold" href={`/usuario/mi-direccion/nueva`}>
          Agregar Dirección
        </Link>
      </footer>
    </section>
  );
};
