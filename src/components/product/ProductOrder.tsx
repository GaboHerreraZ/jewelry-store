"use client";

import { Order } from "@/interfaces/order";
import { ORDERBY } from "@/utils/constant";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const ProductOrder = () => {
  const [order, setOrder] = useState<Order>();

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const handleOrder = (order: Order) => {
    setOrder(order);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (order) {
      params.set("order", order.order);
      params.set("orderBy", order.orderBy);
    } else {
      params.delete("order");
      params.delete("orderBy");
    }

    const url = `${pathName}?${params.toString()}`;
    router.replace(url, { scroll: false });
  }, [order, pathName, router, searchParams]);

  return (
    <div className="group relative w-[220px]">
      <h1 className="text-md  w-full ">
        Ordenar: <span className="font-bold">{order?.name}</span>
      </h1>
      <div className="z-50 invisible group-hover:visible  w-full opacity-0 group-hover:opacity-100 absolute group-hover:text-gold  transition-all duration-500">
        <ul className="border-[1px] w-full bg-white  border-gray-200 ">
          {ORDERBY.map((item, idx) => (
            <li
              key={item.id + idx}
              className="hover:bg-slate-950 hover:Text-gold px-4"
            >
              <label
                onClick={() => handleOrder(item)}
                className="cursor-pointer"
              >
                {item.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
