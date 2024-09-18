import breakpoints from "@theme/breakpoints";
import spacing from "@theme/spacing";
import type { BasicTheme } from "basic-styled";

const dark: BasicTheme = {
  mode: "dark",
  palette: {
    primary: "#C5CAFC",
    secondary: "#FCC5CB",
    tertiary: "#ACDFE1",
    mainText: "#FFFFFF",
    subText: "rgb(255, 255, 255, 0.541)",
    background: "#212121"
  },
  spacing,
  breakpoints
};

export default dark;
