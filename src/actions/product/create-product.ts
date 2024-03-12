"use server";

import prisma from "@/lib/prisma";
import supabase from "@/lib/supabase";
import { Product as PrismaProduct } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const createProduct = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  const { id, urlImages, images, ...rest } = data as any;
  try {
    const prismaTx = await prisma.$transaction(
      async (client) => {
        const imagesPromise: {
          folder: string;
          urlPath: string;
          promise: Promise<any>;
        }[] = [];
        const urlImages: { url: string; folder: string }[] = [];
        let product: PrismaProduct;
        const idParse = id ? (id as unknown as string) : "";

        const productParse = {
          ...rest,
          detailPrice: parseFloat(rest.detailPrice.toString()),
          wholesalePrice: parseFloat(rest.wholesalePrice.toString()),
          categoryId: rest.categoryId.toString(),
          subcategoryId: rest.subcategoryId.toString(),
          quantity: parseInt(rest.quantity.toString())
            ? parseInt(rest.quantity.toString())
            : 0,
          available: rest.available === "true",
          owner: rest.owner === "true",
        };

        if (images) {
          const listImage = formData.getAll("images") as File[];
          listImage.forEach((file) => {
            const path = `products/${rest.sku}/${file.name}`;
            imagesPromise.push({
              urlPath: path,
              folder: `${rest.sku}/${file.name}`,
              promise: uploadImage(path, file),
            });
          });

          await Promise.all(imagesPromise.map((item) => item.promise));

          imagesPromise.forEach((image) => {
            urlImages.push({
              folder: image.folder,
              url: getUrlImage(image.urlPath).data.publicUrl,
            });
          });
        }

        if (id) {
          product = await client.product.update({
            where: {
              id: idParse,
            },
            data: {
              ...productParse,
              productImage: {
                create: [
                  ...urlImages.map((url) => {
                    return {
                      url: url.url,
                      folder: url.folder,
                    };
                  }),
                ],
              },
            },
          });
        } else {
          product = await client.product.create({
            data: {
              ...productParse,
              productImage: {
                create: [
                  ...urlImages.map((url) => {
                    return {
                      url: url.url,
                      folder: url.folder,
                    };
                  }),
                ],
              },
            },
          });
        }

        revalidatePath("/admin/productos");
        revalidatePath(`/admin/producto/${product.slug}`);
        revalidatePath(`/producto/${product.slug}`);
        revalidatePath("/admin");

        return {
          ok: true,
          product: product,
        };
      },
      {
        maxWait: 5000,
        timeout: 10000,
      }
    );

    return {
      ok: prismaTx.ok,
      product: prismaTx.product,
    };
  } catch (error) {
    return {
      ok: false,
      message: "Error creando o actualizando el producto",
    };
  }
};

export const uploadImage = async (path: string, file: File) => {
  const { data, error } = await supabase.storage
    .from("products")
    .upload(path, file, {
      upsert: true,
    });

  return data;
};

export const getUrlImage = (path: string) => {
  return supabase.storage.from("products").getPublicUrl(path);
};
