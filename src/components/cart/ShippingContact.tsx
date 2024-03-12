"use client";
import Input from "../ui/input/Input";
import { useEffect, useState } from "react";
import { useCartStore, usePaymentStore } from "@/store";

export const ShippingContact = () => {
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const setContactInfo = useCartStore((state) => state.setContactInfo);
  const contactInfo = useCartStore((state) => state.contactInfo);
  const created = usePaymentStore((state) => state.created);

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
    setContactInfo(e.target.value, phone);
  };

  const handlePhone = (e: any) => {
    setPhone(e.target.value);
    setContactInfo(email, e.target.value);
  };

  useEffect(() => {
    setContactInfo(contactInfo.email, contactInfo.phone);
  }, [setContactInfo, contactInfo.email, contactInfo.phone]);

  return (
    <div className="mt-4 w-full">
      <header className="flex justify-between items-center border-b-[1px] border-gray-200">
        <h1 className="font-bold text-3xl pb-5 ">Información de contacto</h1>
      </header>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-5 mt-4">
        <Input
          type="email"
          disabled={created}
          value={contactInfo.email}
          onChange={handleEmail}
          placeholder="Correo Eléctronico"
        />
        <Input
          disabled={created}
          type="number"
          value={contactInfo.phone}
          onChange={handlePhone}
          placeholder="Número de contacto"
        />
      </div>
    </div>
  );
};
