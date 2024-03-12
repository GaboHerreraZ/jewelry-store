import { getDashboardInformation } from "@/actions";
import { Menu } from "@/components/admin";

export default async function AdminPage() {
  const { categories, orders, products, subcategory, users } =
    await getDashboardInformation();

  return (
    <section className="container md:mx-auto px-2 lg:px-10">
      <Menu
        categories={categories}
        orders={orders}
        products={products}
        subcategory={subcategory}
        users={users}
      />
    </section>
  );
}
