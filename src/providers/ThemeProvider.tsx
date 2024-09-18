import GlobalStyle from "@components/utils/GlobalStyle";
import light from "@theme/light";
import createBuilder from "basic-styled/setup/createBuilder";
import ResetStyle from "basic-styled/setup/ResetStyle";
import BasicThemeProvider from "basic-styled/setup/ThemeProvider";
import { PropsWithChildren } from "react";

createBuilder({
  prefix: "plan-mate"
});

function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <BasicThemeProvider theme={light}>
      <ResetStyle />
      <GlobalStyle />
      {children}
    </BasicThemeProvider>
  );
}

export default ThemeProvider;
