import { create, StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ThemeState {
  trigger: "manual" | "system";
  mode: "light" | "dark";
  updateTrigger: (trigger: ThemeState["trigger"]) => void;
  updateMode: (mode: ThemeState["mode"]) => void;
}

const themeStateCreator: StateCreator<ThemeState> = (set) => ({
  trigger: "system",
  mode: "light",
  updateTrigger: (trigger) => set({ trigger }),
  updateMode: (mode) => set({ mode })
});

const useThemeStore = create<ThemeState>()(
  devtools(
    persist(themeStateCreator, {
      name: "theme-state",
      partialize: (state) => ({ trigger: state.trigger, mode: state.mode })
    })
  )
);

export default useThemeStore;
