import {
  ActionRow,
  BaseRow,
  DateRow,
  ImageRow,
  StateRow,
  Table,
  TextRow,
} from "@/components/ui";
import { Base } from "@/interfaces/base";
import { Column } from "@/interfaces/column";
import { Product } from "@/interfaces/product";
import Link from "next/link";

import { BiSolidEdit } from "react-icons/bi";

const columns: Column[] = [
  { label: "Imagen" },
  { label: "Sku" },
  { label: "Slug" },
  { label: "Disponiblidad" },
  { label: "Cantidad" },
  { label: "Categoría" },
  { label: "Subcategoría" },
  { label: "Fecha Alta" },
  { label: "Acciones" },
];

interface Props {
  products: Product[];
  totalPages: number;
  categories: Base[];
  subcategories: Base[];
}

export const ProductGrid = ({
  products,
  categories,
  subcategories,
  totalPages,
}: Props) => {
  return (
    <div className="mt-5">
      <header className="flex justify-between items-center border-b-[1px] border-gray-300">
        <h1 className="text-xl font-extrabold mb-5 uppercase">Artículos</h1>
        <Link className="button-gold" href="/admin/producto/nuevo">
          Agregar Artículo
        </Link>
      </header>

      <Table columns={columns} totalPages={totalPages}>
        <>
          {products.map((product) => (
            <tr key={product.id}>
              <ImageRow
                image={product.productImage[0].url}
                label={product.name}
              />
              <TextRow label={product.sku} />
              <TextRow label={product.slug} />
              <StateRow
                state={product.available}
                trueLabel="Disponible"
                falseLabel="No disponible"
              />
              <TextRow label={product.quantity} />
              <BaseRow base={categories} id={product.categoryId} />
              <BaseRow base={subcategories} id={product.subcategoryId} />
              <DateRow date={product.createdAt} />
              <ActionRow
                actions={[
                  {
                    icon: <BiSolidEdit size={25} />,
                    href: `/admin/producto/${product.sku}`,
                    id: product.sku,
                  },
                ]}
              />
            </tr>
          ))}
        </>
      </Table>
    </div>
  );
};
