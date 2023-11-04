import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

type Store = {
  offsetHeight: string;
  update: (name: keyof Store, value: string) => void;
};

export const useRevangeStore = create<Store>((set) => ({
  offsetHeight: "0",
  update: (name, value) => set({ [name]: value }),
}));

if (import.meta.env.MODE === "development") {
  mountStoreDevtool("tableStore", useRevangeStore);
}
