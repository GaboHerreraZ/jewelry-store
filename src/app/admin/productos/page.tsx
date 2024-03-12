import { getCategories, getProducts, getSubcategories } from "@/actions";
import { ProductGrid } from "@/components/admin";

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function ProductsPage({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const data = Promise.all([
    getProducts({ page: page, take: 10 }),
    getCategories(),
    getSubcategories(),
  ]);

  const [products, categories, subcategories] = await data;

  return (
    <section className="container md:mx-auto px-2 lg:px-10">
      <ProductGrid
        products={products!.products}
        categories={categories}
        subcategories={subcategories}
        totalPages={products!.totalPages}
      />
    </section>
  );
}
