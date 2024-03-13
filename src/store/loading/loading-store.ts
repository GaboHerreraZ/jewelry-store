import { create } from "zustand";

interface State {
  loading: boolean;
  toggleLoading: (loading: boolean) => void;
}

export const useLoadingStore = create<State>()((set) => ({
  loading: false,
  toggleLoading: (loading: boolean) => {
    set(() => ({ loading }));
  },
}));
