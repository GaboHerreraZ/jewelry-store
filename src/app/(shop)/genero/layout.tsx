import { getCategories, getSubcategories } from "@/actions";
import { ProductFilters } from "@/components";

export default async function GenderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [categories, subcategories] = await Promise.all([
    getCategories(),
    getSubcategories(),
  ]);

  return (
    <div className="">
      <ProductFilters categories={categories} subcategories={subcategories} />
      <div className="container   mx-auto">{children}</div>
    </div>
  );
}
