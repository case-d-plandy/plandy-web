import GlobalStyle from "@components/utils/GlobalStyle";
import useThemeStore from "@stores/theme.ts";
import dark from "@theme/dark.ts";
import light from "@theme/light";
import createBuilder from "basic-styled/setup/createBuilder";
import ResetStyle from "basic-styled/setup/ResetStyle";
import BasicThemeProvider from "basic-styled/setup/ThemeProvider";
import { PropsWithChildren, useEffect } from "react";

createBuilder({
  prefix: "plan-mate"
});

function ThemeProvider({ children }: PropsWithChildren) {
  const trigger = useThemeStore((state) => state.trigger);
  const mode = useThemeStore((state) => state.mode);
  const updateMode = useThemeStore((state) => state.updateMode);

  useEffect(() => {
    if (trigger === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      updateMode(isDark ? "dark" : "light");
    }
  }, [trigger, mode, updateMode]);

  useEffect(() => {
    const handleChange = (e: MediaQueryListEvent) => {
      if (trigger === "system") {
        updateMode(e.matches ? "dark" : "light");
      }
    };

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handleChange);

    return () => {
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", handleChange);
    };
  }, [trigger, updateMode]);

  return (
    <BasicThemeProvider theme={mode === "dark" ? dark : light}>
      <ResetStyle />
      <GlobalStyle />
      {children}
    </BasicThemeProvider>
  );
}

export default ThemeProvider;
