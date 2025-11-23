import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { initialZIndex, windowConfig } from "../constants";

interface WindowState {
  windows: Record<string, { isOpen: boolean; zIndex: number; data: unknown }>;
  nextZindex: number;
}

interface WindowActions {
  openWindow: (windowKey: string, data?: unknown) => void;
  closeWindow: (windowKey: string) => void;
  focusWindow: (windowKey: string) => void;
}

type WindowStore = WindowState & WindowActions;

const useWindowStore = create<WindowStore>()(
  immer((set) => ({
    windows: windowConfig,
    nextZindex: initialZIndex + 1,

    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isOpen = true;
        win.zIndex = state.nextZindex;
        win.data = data ?? win.data;
        state.nextZindex++;
      }),

    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isOpen = false;
        win.zIndex = initialZIndex;
        win.data = null;
      }),

    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.zIndex = state.nextZindex++;
      }),
  }))
);

export default useWindowStore;