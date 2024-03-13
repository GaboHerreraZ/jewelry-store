"use client";
import { useLoadingStore } from "@/store";
import "./loading.css";
import Image from "next/image";

import logo from "../../../../public/png/bellarte-icono.png";

export const Loading = () => {
  const loading = useLoadingStore((state) => state.loading);

  return (
    <>
      {loading && (
        <div className="fixed bg-black/80 z-50 top-0 h-screen w-full flex flex-col gap-2 justify-center items-center">
          <Image src={logo} alt="Logo Bellarte Joyería" width={200} />
          <div className="loadership">
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
};
