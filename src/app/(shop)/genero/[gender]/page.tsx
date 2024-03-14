import { getProducts } from "@/actions";
import { ProductContainer } from "@/components";
import { Gender } from "@/utils/constant";
import { Metadata } from "next";

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

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateStaticParams() {
  const genders = [Gender.men, Gender.women, Gender.kid, "all"];

  return genders.map((gender) => ({
    gender,
  }));
}

export async function generateMetadata({
  params: { gender },
}: {
  params: { gender: string };
}): Promise<Metadata> {
  return {
    metadataBase: new URL(`https://bellartejoyeria.com/genero/${gender}`),
    title:
      gender === Gender.men
        ? "Joyería para hombres"
        : gender === Gender.women
        ? "Joyería para mujeres"
        : "Joyería para niños",
    description:
      "Descubre la colección de joyería de BellArte Joyería, con elegantes diseños para hombres, mujeres y niños. Filtra por categoría y encuentra la pieza perfecta.",
    openGraph: {
      title:
        gender === Gender.men
          ? "Joyería para hombres"
          : gender === Gender.women
          ? "Joyería para mujeres"
          : "Joyería para niños",
      description:
        "Descubre la colección de joyería de BellArte Joyería, con elegantes diseños para hombres, mujeres y niños. Filtra por categoría y encuentra la pieza perfecta.",
      siteName: "BellArte Joyerúa",
      url: `https://bellartejoyeria.com/genero/${gender}`,
    },
    verification: {
      google:
        "google-site-verification=ml8yek4F0ARyMjz2nZhGf96nTfb3JA7AIN4yq3MOkcQ",
    },
  };
}

export default async function GenderPage({
  params: { gender },
  searchParams: { page, categoria, subcategoria, order, orderBy },
}: Props) {
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
