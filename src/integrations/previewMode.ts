import type { RouteOptions } from "astro";
import { loadEnv } from "vite";

export function setPrerender() {
  const { PREVIEW } = loadEnv(process.env.NODE_ENV || "", process.cwd(), "");

  return {
    name: "set-prerender",
    hooks: {
      "astro:route:setup": ({ route }: { route: RouteOptions }) => {
        if (PREVIEW === "true") {
          route.prerender = PREVIEW !== "true";
        }
      },
    },
  };
}
