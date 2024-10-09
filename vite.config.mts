import path from "path";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg"
    })
  ],
  resolve: {
    alias: [
      {
        find: `@assets`,
        replacement: path.resolve(__dirname, "src/assets")
      },
      {
        find: `@components`,
        replacement: path.resolve(__dirname, "src/components")
      },
      {
        find: `@pages`,
        replacement: path.resolve(__dirname, "src/pages")
      },
      {
        find: `@providers`,
        replacement: path.resolve(__dirname, "src/providers")
      },
      {
        find: `@stores`,
        replacement: path.resolve(__dirname, "src/stores")
      },
      {
        find: `@theme`,
        replacement: path.resolve(__dirname, "src/theme")
      }
    ]
  }
});
