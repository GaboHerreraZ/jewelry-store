import { getCategories } from "@/actions";
import { CategoryGrid } from "@/components/admin";

export default async function CategoryPage() {
  const categories = await getCategories();
  return (
    <section className="container md:mx-auto px-2 lg:px-10">
      <CategoryGrid categories={categories} />
    </section>
  );
}
