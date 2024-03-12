"use client";
import clsx from "clsx";

import { useCartStore } from "@/store";
import { IoMdClose } from "react-icons/io";
import { CartProduct } from "./CartProduct";
import { currencyFormat } from "@/utils/currenyFormat";
import { useRouter } from "next/navigation";

export const CartSidebar = () => {
  const isSideMenuOpen = useCartStore((state) => state.isSidebarOpen);
  const toogleSideMenu = useCartStore((state) => state.toogleSideMenu);
  const getTotal = useCartStore((state) => state.getTotal);

  const router = useRouter();

  const products = useCartStore((state) => state.products);

  const handlePayment = () => {
    toogleSideMenu();
    router.replace(`/checkout`);
  };

  const handleSeeProducts = () => {
    toogleSideMenu();
    router.replace("/genero/all");
  };

  return (
    <div
      className={clsx("fixed h-screen top-0 left-0", {
        " w-screen  z-[100] bg-black/45": isSideMenuOpen,
        "-z-1 ": !isSideMenuOpen,
      })}
    >
      <aside
        className={clsx(
          "w-[350px] border-l-[1px]  border-gold fixed right-0 transition-translate duration-300 h-screen bg-white",
          {
            "translate-x-0": isSideMenuOpen,
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <div className="relative h-full ">
          <header className="flex py-2 px-2 border-b-[1px] border-gray-200 pr-5 ">
            <button onClick={toogleSideMenu}>
              <IoMdClose
                size={30}
                className="hover:rotate-45 transition-rotate duration-500 "
              />
            </button>
            <h1 className="text-slate-950 pl-2 text-2xl font-bold">Carrito</h1>
          </header>
          <div>
            {products.length === 0 && (
              <div className="text-center mt-20">
                <p className="py-5 font-bold">El carrito está vacío</p>
                <button className="button-gold" onClick={handleSeeProducts}>
                  Ver Artículos
                </button>
              </div>
            )}
            {products.map((product) => (
              <CartProduct
                key={product.product.id}
                items={product.items}
                product={product.product}
              />
            ))}
          </div>
          <footer className="absolute bottom-0 py-5 w-full  shadow-2xl shadow-black">
            <div className="px-4 ">
              <div className="flex text-xl font-bold items-center justify-between mb-2">
                <p>Total:</p>
                <p>{currencyFormat(getTotal())}</p>
              </div>
              {products.length > 0 && (
                <button onClick={handlePayment} className="button-gold w-full">
                  Finalizar Compra
                </button>
              )}
            </div>
          </footer>
        </div>
      </aside>
      <div
        onClick={toogleSideMenu}
        className="w-[calc(100% - 280px)] h-screen"
      ></div>
    </div>
  );
};
