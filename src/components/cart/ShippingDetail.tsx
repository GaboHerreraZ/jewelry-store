import Link from "next/link";
import { Address } from "@/interfaces/address";
import { ShippingAddress } from "./ShippingAddress";
import { ShippingContact } from "./ShippingContact";
import { ProceedPaymentButton } from "./ProceedPaymentButton";
import { EditAddress } from "./EditAddress";

export const ShippingDetail = ({
  addresses,
  authId,
}: {
  addresses: Address[];
  authId: string;
}) => {
  return (
    <section className="w-full mt-4 px-10 ">
      <header className="flex justify-between items-center border-b-[1px] border-gray-200">
        <h1 className="font-bold text-3xl pb-5 ">Envío</h1>
        {authId && <EditAddress />}
      </header>

      {!authId && addresses.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg mt-4">
            Inicia sesión para proceder al pago, si no tienes cuenta, puedes
            crear una aquí
            <Link
              className="underline ml-1 text-gold font-bold "
              href="/auth/registrarse"
            >
              Registrarse
            </Link>
          </p>
          <div className="mt-4">
            <Link className="button-gold" href="/auth/login">
              Inicia sesión
            </Link>
          </div>
        </div>
      )}

      {authId && addresses.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <p className="mt-4">
            No tienes direcciones de envío, por favor agrega una para proceder
            al pago
          </p>
          <Link href="/usuario/mi-direccion/nueva" className="button-gold mt-2">
            Agregar Dirección
          </Link>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-4">
        {addresses.map((address) => (
          <ShippingAddress key={address.id} address={address} />
        ))}
      </div>
      <ShippingContact />
      <div className="flex justify-between mt-4 pb-10">
        <Link className="button-gold" href={`/checkout`}>
          Volver
        </Link>
        <ProceedPaymentButton />
      </div>
    </section>
  );
};
