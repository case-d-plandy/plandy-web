import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type ThemeState = {
  trigger: "manual" | "system";
  mode: "light" | "dark";
  _hasHydrated: boolean;
};

export type ThemeActions = {
  updateTrigger: (trigger: ThemeState["trigger"]) => void;
  updateMode: (mode: ThemeState["mode"]) => void;
  setHasHydrated: (state: ThemeState["_hasHydrated"]) => void;
};

export type ThemeStore = ThemeState & ThemeActions;

const initialThemeState: ThemeState = {
  trigger: "system",
  mode: "light",
  _hasHydrated: false
};

const themeStateCreator: StateCreator<ThemeStore> = (set) => ({
  ...initialThemeState,
  updateTrigger: (trigger) => set({ trigger }),
  updateMode: (mode) => set({ mode }),
  setHasHydrated: (state) => {
    set({ _hasHydrated: state });
  }
});

const useThemeStore = create<ThemeStore>()(
  devtools(
    persist(themeStateCreator, {
      name: "theme-state",
      partialize: (state) => ({ trigger: state.trigger, mode: state.mode }),
      onRehydrateStorage: () => (state: ThemeStore | undefined) => {
        state?.setHasHydrated(true);
      }
    })
  )
);

export default useThemeStore;
