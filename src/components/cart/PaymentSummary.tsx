"use client";
import { useCartStore, usePaymentStore } from "@/store";
import Link from "next/link";
import { ConfirmButton } from "./ConfirmButton";
import { UpdateOrderButton } from "./UpdateOrderButton";

export const PaymentSummary = ({ authId }: { authId: string }) => {
  const address = useCartStore((state) => state.address);
  const created = usePaymentStore((state) => state.created);

  const contactInfo = useCartStore((state) => state.contactInfo);

  return (
    <div className="w-full  px-10 mt-5">
      <header className="flex justify-between items-center border-b-[1px] border-gray-200">
        <h1 className="font-bold text-3xl pb-5 ">Datos de envío</h1>
      </header>
      <div className="flex flex-col  md:flex-row gap-10 mt-4 ">
        <div>
          <h1 className="font-bold text-xl">Destinatario:</h1>
          <p>
            <span className="font-bold">Nombre:</span> {address.name}{" "}
            {address.lastName}
          </p>
          <p>
            <span className="font-bold">Dirección:</span> {address.address}{" "}
            {address.additional}
          </p>
          <p>
            <span className="font-bold mr-1">Ubicación:</span>
            {address.department}, {address.city} {address.postalCode}
          </p>
        </div>
        <div>
          <h1 className="font-bold text-xl">Información de contacto:</h1>
          <p>
            <span className="font-bold mr-1">Correo eléctronico:</span>
            {contactInfo.email}
          </p>
          <p>
            <span className="font-bold mr-1">Teléfono:</span>
            {contactInfo.phone}
          </p>
        </div>
      </div>
      <footer className="border-t-[1px] border-gray-200 mt-4">
        <p className="text-sm mt-4">
          Al realizar el pago, aceptas la
          <Link className="underline italic mx-1" href={""}>
            Politica de privacidad
          </Link>
          y los
          <Link className="underline italic mx-1" href={""}>
            Términos de uso.
          </Link>
        </p>

        <div className="flex justify-between mt-4">
          <Link className="button-gold" href={`/checkout/envio`}>
            Volver
          </Link>
          {!created ? <ConfirmButton authId={authId} /> : <UpdateOrderButton />}
        </div>
      </footer>
    </div>
  );
};
