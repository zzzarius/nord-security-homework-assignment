import { test as base } from "@playwright/test";

import {
  getFullHeightPageSnapshot,
  MOBILE,
  TABLET,
  DESKTOP,
} from "./getFullHeightPageSnapshot";

// biome-ignore lint/suspicious/noConfusingVoidType: To make it simpler use void as written in playwright docs
export const testWithTokenCookie = base.extend<{ forEachTest: void }>({
  forEachTest: [
    async ({ context }, use) => {
      await context.addCookies([
        {
          name: "token",
          value: "dummyToken",
          path: "/",
          domain: "localhost",
        },
      ]);
      await use();
    },
    { auto: true },
  ],
});

base.describe("Servers Page", () => {
  testWithTokenCookie(MOBILE, async ({ page }) => {
    await getFullHeightPageSnapshot("/", page, MOBILE);
  });
  testWithTokenCookie(TABLET, async ({ page }) => {
    await getFullHeightPageSnapshot("/", page, TABLET);
  });
  testWithTokenCookie(DESKTOP, async ({ page }) => {
    await getFullHeightPageSnapshot("/", page, DESKTOP);
  });
});
