import { getProducts } from "@/actions";
import { ProductContainer } from "@/components";
import { Gender } from "@/utils/constant";

interface Props {
  params: {
    gender: string;
  };
  searchParams: {
    page?: string;
    categoria?: string;
    subcategoria?: string;
    order?: string;
    orderBy?: string;
  };
}

export default async function GenderPage({
  params,
  searchParams: { page, categoria, subcategoria, order, orderBy },
}: Props) {
  const { gender } = params;

  const productPage = page ? parseInt(page) : 1;

  const category = categoria ? categoria.split(",") : [];
  const subcategory = subcategoria ? subcategoria.split(",") : [];

  const productOrder = order ? order : "asc";
  const productOrderBy = orderBy ? orderBy : "name";

  const products = await getProducts({
    page: productPage,
    take: 10,
    gender: gender === "all" ? undefined : (gender as Gender),
    category,
    subcategory,
    orderBy: productOrderBy,
    order: productOrder,
  });

  return <ProductContainer products={products?.products!} />;
}
