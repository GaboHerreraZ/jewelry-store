import { Address } from "@/interfaces/address";
import { Product } from "@/interfaces/product";
import { create } from "zustand";

interface State {
  orderId: string;
  items: number;
  address: Address;
  contactInfo: { email: string; phone: string };
  shippingCost: number;
  isSidebarOpen: boolean;
  products: { items: number; product: Product }[];
  setItemsCount: (items: number, product: Product) => void;
  toogleSideMenu: () => void;
  getSubTotal: () => number;
  getTotal: () => number;
  deleteProduct: (id: string) => void;
  setAddress: (address: Address) => void;
  setShippingCost: (cost: number) => void;
  setContactInfo: (email: string, phone: string) => void;
  setOrderPending: (
    items: number,
    address: Address,
    contactInfo: { email: string; phone: string },
    products: { items: number; product: Product }[]
  ) => void;
}

export const useCartStore = create<State>()((set, get) => ({
  orderId: "",
  items: 0,
  address: {} as Address,
  contactInfo: { email: "", phone: "" },
  shippingCost: 0,
  isSidebarOpen: false,
  products: [],
  setItemsCount: (items: number, product: Product) => {
    set((state) => {
      const findProduct = state.products.find(
        (p) => p.product.id === product.id
      );
      if (findProduct) {
        findProduct.items = items;
        const totalItems =
          state.products
            .filter((p) => p.product.id !== product.id)
            .reduce((prev, acc) => acc.items + prev, 0) + findProduct.items;

        return {
          items: totalItems,
          products: [
            ...state.products.filter((p) => p.product.id !== product.id),
            findProduct,
          ],
        };
      }

      return {
        items: state.items + items,
        products: [...state.products, { items, product }],
      };
    });
  },
  toogleSideMenu: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  getSubTotal: () => {
    const products = get().products;
    return products.reduce((prev, acc) => {
      return prev + acc.product.detailPrice * acc.items;
    }, 0);
  },
  getTotal: () => {
    return get().getSubTotal() + get().shippingCost;
  },
  deleteProduct: (id: string) => {
    set((state) => {
      const products = state.products.filter((p) => p.product.id !== id);
      return {
        products,
        items: products.reduce((prev, acc) => prev + acc.items, 0),
      };
    });
  },
  setAddress: (address: Address) => set(() => ({ address })),
  setShippingCost: (cost: number) => set(() => ({ shippingCost: cost })),
  setContactInfo: (email: string, phone: string) =>
    set(() => ({ contactInfo: { email, phone } })),
  setOrderPending: (
    items: number,
    address: Address,
    contactInfo: { email: string; phone: string },
    products: { items: number; product: Product }[]
  ) => {
    set(() => ({ items, address, contactInfo, products }));
  },
}));
