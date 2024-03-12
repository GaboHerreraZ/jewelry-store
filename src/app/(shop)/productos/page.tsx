import { getProducts } from "@/actions";
import { ProductContainer } from "@/components";

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function ProductPage({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const products = await getProducts({ page: page, take: 10 });

  return <ProductContainer products={products?.products!} />;
}
