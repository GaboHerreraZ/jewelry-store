import Image from "next/image";

import { Product } from "@/interfaces/product";
import { currencyFormat } from "@/utils/currenyFormat";
import { AddProductCart } from "./AddProductCart";
import { DeleteProductCart } from "./DeleteProductCart";

export const CartProduct = ({
  items,
  product,
}: {
  items: number;
  product: Product;
}) => {
  return (
    <div className="relative mt-5 px-4 h-full ">
      <div className="flex items-center ">
        <div className="w-1/2">
          <h1 className="font-bold text-xl">{product.name}</h1>
          <div className="flex-shrink-0 w-16 h-16">
            <Image
              className="w-full h-full rounded-full"
              src={product.productImage[0].url}
              alt={product.name}
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className="w-1/2">
          <div className="grid gap-2 ">
            <p className="text-gold ">
              {currencyFormat(product.detailPrice * items)}
            </p>
            <div className="flex">
              <AddProductCart items={items} product={product} />
              <DeleteProductCart product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
