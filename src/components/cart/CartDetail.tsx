"use client";
import { useCartStore } from "@/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CartProductDetail } from "./CartProductDetail";

export const CartDetail = () => {
  const products = useCartStore((state) => state.products);
  const pathName = usePathname();

  return (
    <div className="w-full  px-10 pb-10">
      <h1 className="font-bold text-3xl pb-5">Tu Carro</h1>
      {products.length === 0 && (
        <div className="text-center border-t-[1px] border-gray-200">
          <p className="py-5 font-bold">El carrito está vacío</p>
          <Link href="/genero/all" className="button-gold mt-2">
            Ver Artículos
          </Link>
        </div>
      )}
      {products.map((product) => (
        <CartProductDetail
          key={product.product.id}
          items={product.items}
          product={product.product}
        />
      ))}
      {products.length > 0 && (
        <div className="flex justify-end">
          <Link href={`${pathName}/envio`} className="button-gold">
            Información de envío
          </Link>
        </div>
      )}
    </div>
  );
};
