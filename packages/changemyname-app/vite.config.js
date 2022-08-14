import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import addLogosToBundle from "./plugins/addLogosToBundle.js";
import injectTitle from "./plugins/injectTitle.js";
import processLandscape from "./plugins/processLandscape.js";
import injectFavicon from "./plugins/injectFavicon.js";

const extraAlias = process.env.MONOREPO
  ? {
      "changemyname-react": "changemyname-react/src/index.js",
    }
  : {};

const srcPath = resolve("assets");
const distPath = resolve("dist");

const debugOptions = process.env.DEBUG ? { minify: false } : {};

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    addLogosToBundle(srcPath),
    injectTitle(srcPath),
    processLandscape(),
    injectFavicon(),
  ],
  publicDir: command !== "build" && srcPath,
  clearScreen: false,
  server: {
    port: "3000",
    open: true,
  },
  build: {
    outDir: distPath,
    emptyOutDir: true,
    ...debugOptions,
  },
  preview: {
    port: 4000,
  },
  resolve: {
    alias: {
      ...extraAlias,
      project: srcPath,
    },
  },
  logLevel: process.env.MONOREPO ? "info" : "error",
}));
