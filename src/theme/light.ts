import breakpoints from "@theme/breakpoints";
import grey from "@theme/colors/grey";
import spacing from "@theme/spacing";
import typography from "@theme/typography";
import type { BasicTheme } from "basic-styled";

const light: BasicTheme = {
  mode: "light",
  palette: {
    primary: "#959EF9",
    secondary: "#F9959E",
    tertiary: "#87D1D4",
    mainText: "rgb(0, 0, 0, 0.867)",
    subText: "rgb(0, 0, 0, 0.451)",
    background: "#FAFAFA",
    grey,
    border: grey["300"]
  },
  typography,
  spacing,
  breakpoints
};

export default light;
