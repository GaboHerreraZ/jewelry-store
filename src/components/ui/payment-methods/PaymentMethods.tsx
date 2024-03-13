import {
  AmericanExpress,
  BancolombiaIcon,
  MasterCardIcon,
  NequiIcon,
  VisaIcon,
} from "@/utils";
import pse from "../../../../public/png/PSE.png";
import Image from "next/image";

export const PaymentMethods = () => {
  return (
    <>
      <h2 className="font-bold">Pagos seguros con Wompi:</h2>
      <div className="flex items-center gap-2">
        <MasterCardIcon size={50} />
        <VisaIcon size={50} />
        <AmericanExpress size={50} />
        <Image src={pse} alt="pse icon" width={80} height={50} />
        <NequiIcon />
        <BancolombiaIcon />
      </div>
    </>
  );
};
