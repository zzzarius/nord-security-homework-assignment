// @ts-check
import { loadEnv } from "vite";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import node from "@astrojs/node";

import { setPrerender } from "./src/integrations/previewMode";

const { PREVIEW, CI } = loadEnv(process.env.NODE_ENV || "", process.cwd(), "");
const isPreview = PREVIEW === "true";
const isCI = CI === "true";

// https://astro.build/config
export default defineConfig({
  base: ".",
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: {
    enabled: !isCI,
  },
  integrations: [setPrerender(), react()],
  adapter: isPreview
    ? node({
        mode: "standalone",
      })
    : vercel(),
});
