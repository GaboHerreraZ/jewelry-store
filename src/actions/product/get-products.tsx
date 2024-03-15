import { Product } from "@/interfaces/product";
import prisma from "@/lib/prisma";
import { Gender } from "@prisma/client";

interface Props {
  page?: number;
  take?: number;
  category?: string[];
  subcategory?: string[];
  gender?: Gender;
  orderBy?: string;
  order?: string;
}

export const getProducts = async ({
  page = 1,
  take = 10,
  category,
  subcategory,
  gender,
  orderBy = "name",
  order = "asc",
}: Props) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  const whereClause = {
    gender,
    ...(subcategory?.length && {
      OR: [
        {
          subcategory: {
            name: {
              in: subcategory,
            },
          },
        },
      ],
    }),
    ...(category?.length && {
      OR: [
        {
          category: {
            name: {
              in: category,
            },
          },
        },
      ],
    }),
  };

  try {
    const products = await prisma.product.findMany({
      skip: (page - 1) * take,
      take,
      where: !gender
        ? {
            ...(subcategory?.length && {
              OR: [
                {
                  subcategory: {
                    name: {
                      in: subcategory,
                    },
                  },
                },
              ],
            }),
            ...(category?.length && {
              OR: [
                {
                  category: {
                    name: {
                      in: category,
                    },
                  },
                },
              ],
            }),
          }
        : whereClause,
      include: {
        productImage: true,
        desiredProduct: true,
      },
      orderBy: {
        [orderBy]: order,
      },
    });

    const totalCount = await prisma.product.count({
      where: whereClause,
    });

    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages,
      products: products.map((product) => ({
        ...product,
      })) as Product[],
    };
  } catch (e) {
    return null;
  }
};
