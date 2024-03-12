import { OrderAddress, ProductOrder } from "@/interfaces/orderCheckout";
import { currencyFormat } from "@/utils/currenyFormat";
import Image from "next/image";

export const OrderDetailProduct = ({
  item,
  address,
}: {
  item: ProductOrder;
  address: OrderAddress;
}) => {
  return (
    <div className="flex py-5  gap-2 border-b-[1px] border-gray-200">
      <div key={item.id} className="relative flex-shrink-0 w-44 h-44">
        <Image
          className="w-full h-full "
          src={item.product!.productImage[0].url}
          alt={item.product!.name}
          width={176}
          height={176}
        />
      </div>
      <div>
        <p className="font-bold text-xl">{item.product!.name}</p>
        <p>{item.product?.description}</p>
        <p className="mt-3 text-xs">SKU:{item.product?.sku}</p>

        <div className="text-xs mt-2">
          <h2 className="font-bold">Enviado a:</h2>
          <p>
            {address.address?.name} {address.address?.lastName}
          </p>
          <p>{address.address?.address}</p>
          <p>
            {address.address?.department}, {address.address?.city}
          </p>
        </div>

        <p className="font-bold text-gold">
          {currencyFormat(item.product!.detailPrice * item.quantity)} x{" "}
          {item.quantity}
        </p>
      </div>
    </div>
  );
};
