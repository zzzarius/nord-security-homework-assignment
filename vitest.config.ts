/// <reference types="vitest" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    include: ["**/*.test.ts", "**/*.visnapshot.ts", "**/*.vitest.ts"],
  },
});
