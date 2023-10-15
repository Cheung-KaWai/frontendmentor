import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

export type Planets = "Mercury" | "Venus" | "Earth" | "Mars" | "Jupiter" | "Saturn" | "Uranus" | "Neptune";

type Store = {
  planet: string;
  update: (name: keyof Store, value: Planets) => void;
};

export const usePlanetStore = create<Store>((set) => ({
  planet: "Mercury",
  update: (name, value) => set({ [name]: value }),
}));

if (import.meta.env.MODE === "development") {
  mountStoreDevtool("tableStore", usePlanetStore);
}
