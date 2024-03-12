import { create } from "zustand";

interface State {
  isSideMenuOpen: boolean;
  toogleSideMenu: () => void;
}

export const useNavbarStore = create<State>()((set) => ({
  isSideMenuOpen: false,
  toogleSideMenu: () =>
    set((state) => ({ isSideMenuOpen: !state.isSideMenuOpen })),
}));
