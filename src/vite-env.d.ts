/// <reference types="vite/client" />

import "basic-styled";

import type breakpoints from "@theme/breakpoints";
import type spacing from "@theme/spacing";

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
    };
    spacing: typeof spacing;
    breakpoints: typeof breakpoints;
  }
}
