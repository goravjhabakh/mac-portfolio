import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "../constants";

const defaultLocation = locations.projects

type locationsMap = typeof locations
type explorerItem = locationsMap[keyof locationsMap]

interface ExplorerState {
  activeLocation: explorerItem;
  setActiveLocation: (location?: explorerItem | null) => void;
  resetActiveLocation: () => void;
}

const useExplorerStore = create<ExplorerState>()(
  immer((set) => ({
    activeLocation: defaultLocation,
    
    setActiveLocation: (location = null) => set((state) => {
      state.activeLocation = location || defaultLocation
    }),

    resetActiveLocation: () => set((state) => {
      state.activeLocation = defaultLocation
    })
})))

export default useExplorerStore