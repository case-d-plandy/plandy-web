/// <reference types="vite/client" />

import "basic-styled";

declare module "basic-styled" {
  export interface BasicTheme {
    palette: {
      primary: string;
      secondary: string;
      tertiary: string;
      mainText: string;
      subText: string;
      background: string;
    };
  }
}
