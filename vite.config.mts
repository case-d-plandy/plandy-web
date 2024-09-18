import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
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
        find: `@theme`,
        replacement: path.resolve(__dirname, "src/theme")
      }
    ]
  }
});
