/// <reference types="vite/client" />

import "basic-styled";

import grey from "@theme/colors/grey";

import type breakpoints from "@theme/breakpoints";

import type spacing from "@theme/spacing";
import type typography from "@theme/typography";

declare module "basic-styled" {
  export interface BasicTheme {
    mode: "light" | "dark";
    palette: {
      primary: string;
      secondary: string;
      tertiary: string;
      mainText: string;
      subText: string;
      background: string;
      grey: typeof grey;
      box: {
        hover: string;
        active: string;
        border: string;
      };
    };
    typography: typeof typography;
    spacing: typeof spacing;
    breakpoints: typeof breakpoints;
  }
}
