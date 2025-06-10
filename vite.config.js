import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@helpers": "/src/style/helpers", // путь от корня проекта
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@helpers/index" as *;`,
      },
    },
  },
});
