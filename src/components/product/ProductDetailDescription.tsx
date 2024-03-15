import clsx from "clsx";
import Image from "next/image";

import pse from "../../../public/png/PSE.png";
import { Product } from "@/interfaces/product";
import { currencyFormat } from "@/utils/currenyFormat";
import { AddProductButton } from "./AddProductButton";
import { RiBus2Fill } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import {
  AmericanExpress,
  BancolombiaIcon,
  MasterCardIcon,
  NequiIcon,
  VisaIcon,
} from "@/utils";

export const ProductDetailDescription = ({
  product,
  wholeSalerUser,
}: {
  product: Product;
  wholeSalerUser: boolean;
}) => {
  return (
    <div>
      <section className="border-b-[1px] border-gray-200 pb-10">
        <h1 className="text-4xl font-bold m-0">{product.name}</h1>
        <small className="">
          Ref:<span className="font-bold">{product.sku}</span>
        </small>
        <div className="flex gap-2 mt-2">
          <div className="flex gap-1  items-center">
            <div
              className={clsx("h-2 w-2 rounded-full", {
                "bg-green-500": product.available,
                "bg-red-500": !product.available,
              })}
            ></div>
            <label
              className={clsx("text-xs", {
                "text-green-500": product.available,
                "text-red-500": !product.available,
              })}
            >
              {product.available ? "Disponible" : "No disponible"}
            </label>
          </div>
          <div className="flex gap-1  items-center">
            <div
              className={clsx("h-2 w-2 rounded-full", {
                "bg-green-500": product.owner,
                "bg-red-500": !product.owner,
              })}
            ></div>
            <label
              className={clsx("text-xs", {
                "text-green-500": product.owner,
                "text-red-500": !product.owner,
              })}
            >
              {product.owner ? "Mayorista" : "No Mayorista"}
            </label>
          </div>
        </div>
        <div className="flex gap-5 mt-4">
          <div>
            <h3 className="text-sm">Precio:</h3>
            <p className="text-2xl text-gold ">
              {currencyFormat(
                wholeSalerUser ? product.wholesalePrice : product.detailPrice
              )}
            </p>
          </div>
        </div>

        <p className="text-xl mt-4">{product.description}</p>

        <AddProductButton product={product} />
      </section>
      <section className="mt-2">
        <div className="flex gap-2 text-sm text-gray-600 items-center">
          <RiBus2Fill size={20} />
          <label> Envíos Nacionales </label>
        </div>
        <div className="flex gap-2 mt-2 text-sm text-gray-600 items-center">
          <AiFillSafetyCertificate size={20} />
          <label>Garantía 1 año </label>
        </div>
        <div className="flex gap-2 mt-2 text-sm text-gray-600 items-center">
          <MdHealthAndSafety size={20} />
          <label>Joya Hipoalergénica</label>
        </div>
      </section>
      <section className="mt-2">
        <h2 className="font-bold">Pagos seguros con Wompi:</h2>
        <div className="flex items-center gap-2">
          <MasterCardIcon size={50} />
          <VisaIcon size={50} />
          <AmericanExpress size={50} />
          <Image src={pse} alt="pse icon" width={80} height={50} />
          <NequiIcon />
          <BancolombiaIcon />
        </div>
      </section>
    </div>
  );
};
