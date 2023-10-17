import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

export type Planets = "Mercury" | "Venus" | "Earth" | "Mars" | "Jupiter" | "Saturn" | "Uranus" | "Neptune";

type Store = {
  planet: string;
  step: string;
  update: (name: keyof Store, value: string) => void;
};

export const usePlanetStore = create<Store>((set) => ({
  planet: "Mercury",
  step: "overview",
  update: (name, value) => set({ [name]: value }),
}));

if (import.meta.env.MODE === "development") {
  mountStoreDevtool("tableStore", usePlanetStore);
}
