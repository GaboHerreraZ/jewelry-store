import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  home: string;
  path: string;
  setBreadcrumb: (home: string, path: string) => void;
}

export const useProductBreadCrumbStore = create(
  persist<State>(
    (set) => ({
      home: "",
      path: "",
      setBreadcrumb: (home, path) => set({ home, path }),
    }),
    { name: "product-breadcrumb" }
  )
);
