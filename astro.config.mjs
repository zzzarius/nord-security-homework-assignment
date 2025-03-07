import node from "@astrojs/node";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";
import { loadEnv } from "vite";

const { NODE_ENV, CI } = loadEnv(process.env.NODE_ENV || "", process.cwd(), "");
const isCI = CI === "true";
const isDev = NODE_ENV === "development";

// https://astro.build/config
export default defineConfig({
  base: ".",
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: {
    enabled: !isCI,
  },
  integrations: [react()],
  adapter:
    isCI || isDev
      ? node({
          mode: "standalone",
        })
      : vercel(),
  env: {
    schema: {
      CI: envField.boolean({
        context: "client",
        access: "public",
        optional: true,
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
