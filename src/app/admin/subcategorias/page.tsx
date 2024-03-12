import { getSubcategories } from "@/actions";
import { SubcategoryGrid } from "@/components/admin";

export default async function SubcategoryPage() {
  const subcategories = await getSubcategories();
  return (
    <section className="container md:mx-auto px-2 lg:px-10">
      <SubcategoryGrid subcategories={subcategories} />
    </section>
  );
}
