"use client";

import { useProductBreadCrumbStore } from "@/store";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const ButtonDetail = ({ id, name }: { id: string; name: string }) => {
  const setBreadcrumb = useProductBreadCrumbStore(
    (state) => state.setBreadcrumb
  );
  const router = useRouter();
  const path = usePathname();
  const params = useSearchParams();

  const handleBreadcrumb = () => {
    const urlRest = new URLSearchParams(params).toString();
    const url = urlRest ? `?${urlRest}` : "";
    setBreadcrumb(`${path}${url}`, name);
    router.replace(`/producto/${id}`);
  };

  return (
    <div className="px-4 w-full mt-1  flex justify-center">
      <button
        type="button"
        onClick={handleBreadcrumb}
        className="px-4 py-1 w-full text-center border-[1px] border-white text-white font-bold  "
      >
        Ver Detalle
      </button>
    </div>
  );
};
