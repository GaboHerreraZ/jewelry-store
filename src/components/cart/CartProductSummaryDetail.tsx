import { Product } from "@/interfaces/product";
import { currencyFormat } from "@/utils/currenyFormat";
import Image from "next/image";

export const CartProductSummaryDetail = ({
  product: { items, product },
}: {
  product: { items: number; product: Product };
}) => {
  return (
    <div className="flex gap-2">
      <div className="flex-shrink-0 w-24 h-24">
        <Image
          className="w-full h-full rounded-full"
          src={product.productImage[0].url}
          alt={product.name}
          width={250}
          height={250}
        />
      </div>
      <div className="text-sm">
        <h1 className="font-bold">{product.name}</h1>
        <p>
          <span className="font-bold">SKU:</span> {product.sku}
        </p>
        <p>
          <span className="font-bold">Precio:</span>{" "}
          {currencyFormat(product.detailPrice)}
        </p>
        <p>
          <span className="font-bold">Cantidad:</span> {items}
        </p>
        <p className="font-bold text-gold">
          {currencyFormat(product.detailPrice * items)}
        </p>
      </div>
    </div>
  );
};
