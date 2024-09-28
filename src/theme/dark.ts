import breakpoints from "@theme/breakpoints";
import grey from "@theme/colors/grey";
import spacing from "@theme/spacing";
import typography from "@theme/typography";
import type { BasicTheme } from "basic-styled";

const dark: BasicTheme = {
  mode: "dark",
  palette: {
    primary: "#C5CAFC",
    secondary: "#FCC5CB",
    tertiary: "#ACDFE1",
    mainText: "#FFFFFF",
    subText: "rgb(255, 255, 255, 0.541)",
    background: "#212121",
    grey: {
      50: grey["900"],
      100: grey["800"],
      200: grey["700"],
      300: grey["600"],
      400: grey["500"],
      500: grey["400"],
      600: grey["300"],
      700: grey["200"],
      800: grey["100"],
      900: grey["900"]
    },
    border: grey["600"]
  },
  typography,
  spacing,
  breakpoints
};

export default dark;
