import Link from "next/link";
import { Address } from "@/interfaces/address";
import clsx from "clsx";

export const AddressCard = ({ address }: { address: Address }) => {
  return (
    <div
      className={clsx(
        "grid border-[1px] min-w-[280px] md:min-w-[350px]   px-10 py-5 rounded mt-4",
        {
          "border-slate-950": !address.main,
          "border-gold border-[2px]": address.main,
        }
      )}
    >
      <div className="">
        {address.main && (
          <h1 className="font-bold text-gold">
            Información de envío predeterminada
          </h1>
        )}
        <h1 className="font-bold py-2 text-xl">
          {address.name} {address.lastName}
        </h1>
        <p className="text-md">
          {address.address} {address.additional}
        </p>
        <p className="text-sm">
          {address.department}, {address.city}
        </p>
        <div className="flex mt-2 justify-between font-bold">
          <Link href={`/usuario/mi-direccion/${address.id}`}>Editar</Link>
          <button>Eliminar</button>
        </div>
      </div>
    </div>
  );
};
