import { getProductBySlug } from "@/actions";
import { ProductDetail } from "@/components";
import { Product } from "@/interfaces/product";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await getProductBySlug(id);

  return <ProductDetail product={product as Product} />;
}
