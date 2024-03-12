import { ProductOrder } from "@/interfaces/orderCheckout";
import Image from "next/image";

export const ProductImage = ({ items }: { items: ProductOrder[] }) => {
  return (
    <div className="flex gap-1 items-center">
      {items.slice(0, 4).map((item, idx) => {
        return (
          <div key={item.id} className="relative flex-shrink-0 w-14 h-16">
            <Image
              className="w-full h-full "
              src={item.product!.productImage[0].url}
              alt="Anillo"
              width={56}
              height={68}
            />
            {idx === 3 && (
              <div className="absolute text-sm flex flex-col justify-center items-center text-white  top-0 bg-black/30 w-full h-full">
                <p>+ {items.length - 4}</p>
                <p>artículos</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
