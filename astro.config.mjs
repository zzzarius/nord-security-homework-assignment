import node from "@astrojs/node";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";
// @ts-check
import { loadEnv } from "vite";

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
  env: {
    schema: {
      CI: envField.boolean({
        context: "server",
        access: "secret",
        optional: true,
      }),
      PREVIEW: envField.boolean({
        context: "server",
        access: "secret",
        optional: true,
        default: true,
      }),
      SERVERS_API_ENDPOINT: envField.string({
        context: "server",
        access: "secret",
        default: "https://playground.tesonet.lt/v1/servers",
      }),
      TOKEN_API_ENDPOINT: envField.string({
        context: "client",
        access: "public",
        default: "https://playground.tesonet.lt/v1/tokens",
      }),
    },
  },
});
