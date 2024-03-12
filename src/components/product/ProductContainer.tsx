import { getUser } from "@/actions";
import { ProductCard } from "./ProductCard";
import { Product } from "@/interfaces/product";

interface Props {
  products: Product[];
}

export const ProductContainer = async ({ products }: Props) => {
  const { id } = await getUser();

  return (
    <section className="flex  flex-wrap gap-5 justify-center md:justify-normal">
      {products?.map((product) => (
        <ProductCard authId={id!} key={product.id} product={product} />
      ))}
    </section>
  );
};
