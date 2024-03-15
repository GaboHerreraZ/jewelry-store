import { notFound } from "next/navigation";
import { getDesiredProducts, getUser } from "@/actions";
import { ProductCard } from "@/components/product/ProductCard";

export default async function WishlistPage() {
  const { id } = await getUser();

  if (!id) notFound();

  const desired = await getDesiredProducts(id);

  return (
    <section className="grid w-full md:min-w-[768px]  mt-5 md:mt-20 ">
      <header className="border-b-[1px]  w-full text-3xl border-gray-200">
        <h1 className="font-bold">Artículos deseados</h1>
        <p className="text-xl pb-2">
          Destellos de deseo: Encuentra tu próxima joya
        </p>
      </header>
      <section className="flex  flex-wrap gap-5 justify-center md:justify-normal">
        {desired?.map((product) => (
          <ProductCard authId={id} key={product.id} product={product} />
        ))}
      </section>
    </section>
  );
}
