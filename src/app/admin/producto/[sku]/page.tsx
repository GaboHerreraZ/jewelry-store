import { getCategories, getProduct, getSubcategories } from "@/actions";
import { ProductPage } from "@/components/admin";
import Link from "next/link";

const getMasterData = async () => {
  const response = await Promise.all([getCategories(), getSubcategories()]);
  return {
    categories: response[0],
    subcategories: response[1],
  };
};

export default async function ProductoPage({
  params: { sku },
}: {
  params: { sku: string };
}) {
  const { categories, subcategories } = await getMasterData();
  const product = sku === "nuevo" ? {} : await getProduct(sku);

  return (
    <section className="container md:mx-auto px-2 lg:px-10">
      <Link className="italic underline" href="/admin/productos">
        Volver
      </Link>
      <ProductPage
        product={product!}
        categories={categories}
        subcategories={subcategories}
      />
    </section>
  );
}
