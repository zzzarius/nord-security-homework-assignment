import { test as base } from "@playwright/test";

// biome-ignore lint/suspicious/noConfusingVoidType: To make it simpler use void as written in playwright docs
export const testWithTokenCookie = base.extend<{ forEachTest: void }>({
  forEachTest: [
    async ({ context }, use) => {
      await context.addCookies([
        {
          name: "token",
          value: "fake-token",
          path: "/",
          domain: "localhost",
        },
      ]);
      await use();
    },
    { auto: true },
  ],
});
