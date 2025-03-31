import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  dts: true, // Gera arquivos de definição de tipos
  sourcemap: true,
  format: ["esm", "cjs"],
  clean: true,
  outDir: "dist",
  tsconfig: "./tsconfig.json",
});
