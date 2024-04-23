import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: resolve(__dirname, "src/components/"),
      },
      {
        find: "@modules",
        replacement: resolve(__dirname, "src/modules/"),
      },
      {
        find: "@pages",
        replacement: resolve(__dirname, "src/pages/"),
      },
      {
        find: "@utils",
        replacement: resolve(__dirname, "src/utils/"),
      },
      {
        find: "@interfaces",
        replacement: resolve(__dirname, "src/interfaces/"),
      },
      {
        find: "@queries",
        replacement: resolve(__dirname, "src/services/queries.ts"),
      },
      {
        find: "@routes",
        replacement: resolve(__dirname, "src/routes.ts"),
      },
    ],
  },
});
