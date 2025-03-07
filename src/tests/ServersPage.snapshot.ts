import { test } from "@playwright/test";
import { testWithTokenCookie } from "./fixtures/TokenCookie.fixture";

import {
  DESKTOP,
  MOBILE,
  TABLET,
  getFullHeightPageSnapshot,
} from "./utils/getFullHeightPageSnapshot";

test.describe("Servers Page", () => {
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
