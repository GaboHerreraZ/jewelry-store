import { getAllProducts } from "@/actions";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://bellartejoyeria.com";

  const articles = await getAllProducts();

  const paths = articles.map((article) => {
    return {
      url: `${baseUrl}/producto/${article.slug}`,
      lastModified: new Date(article.updatedAt).toISOString(),
    };
  });

  paths.push();

  return [
    ...paths,
    {
      url: `${baseUrl}/mayoristas`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/genero/hombre`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/genero/mujer`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/genero/nino`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/genero/all                                                                                                                                                              `,
      lastModified: new Date().toISOString(),
    },
  ];
}
