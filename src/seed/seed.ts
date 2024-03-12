type Category = {
  name: string;
};

type Image = {
  url: string;
};

interface Product {
  sku: string;
  name: string;
  description: string;
  type: string;
  slug: string;
  price: number;
  available: boolean;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

interface SeedData {
  categories: Category[];
  products: Product[];
  images: Image[];
}

export const initialData: SeedData = {
  categories: [
    {
      name: "bracelet",
    },
    {
      name: "ring",
    },
  ],
  products: [
    {
      sku: "PR-001",
      name: "bracelet",
      description: "bracelet",
      type: "bracelet",
      price: 100,
      available: true,
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      slug: "bracelet-gold-man",
    },
    {
      sku: "PR-002",
      name: "ring",
      description: "ring",
      type: "ring",
      price: 100,
      available: true,
      quantity: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      slug: "bracelet-gold-women",
    },
  ],
  images: [
    {
      url: "https://belatrizcolombia.com/app/public/template/shop/img/img_productos/13009-T10/PERFIL.webp",
    },
    {
      url: "https://belatrizcolombia.com/app/public/template/shop/img/img_productos/40125/PERFIL.webp",
    },
  ],
};
