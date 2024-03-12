import { Gender } from "@/utils/constant";
import { ProductImage } from "./productImage";

export interface Product {
  id: string;
  sku: string;
  slug: string;
  name: string;
  description: string;
  available: boolean;
  owner: boolean;
  quantity: number;
  createdAt: Date;
  size: string;
  updatedAt: Date;
  categoryId: string;
  subcategoryId: string;
  detailPrice: number;
  wholesalePrice: number;
  gender: Gender | string;
  productImage: ProductImage[];
  images?: FileList;
  desiredProduct: { productId: string; userId: string }[];
}
