import { ProductOrder } from "@/interfaces/orderCheckout";
import { ImageRow, Table, TextRow } from "@/components/ui";
import { Column } from "@/interfaces/column";
import { currencyFormat } from "@/utils/currenyFormat";

const columns: Column[] = [
  { label: "Imagen" },
  { label: "Sku" },
  { label: "Cantidad" },
  { label: "Precio" },
  { label: "Precio Mayorista" },
];

export const OrderProductGrid = ({
  products,
}: {
  products: ProductOrder[];
}) => {
  return (
    <>
      <h1 className="mt-4 font-bold text-xl uppercase border-b-[1px] border-gray-200 pb-5">
        Productos de la orden
      </h1>
      <Table columns={columns} totalPages={0}>
        {products.map((product) => (
          <tr key={product.id}>
            <ImageRow
              image={product.product?.productImage[0].url || ""}
              label={product.product?.name!}
            />
            <TextRow label={product.product?.sku!} />
            <TextRow label={product.quantity} />
            <TextRow label={currencyFormat(product.product?.detailPrice!)} />
            <TextRow label={currencyFormat(product.product?.wholesalePrice!)} />
          </tr>
        ))}
      </Table>
    </>
  );
};
