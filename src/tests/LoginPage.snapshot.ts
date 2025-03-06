import { test } from "@playwright/test";
import {
  getFullHeightPageSnapshot,
  MOBILE,
  TABLET,
  DESKTOP,
} from "./getFullHeightPageSnapshot";

test.describe("Login Page", () => {
  test(MOBILE, async ({ page }) => {
    await getFullHeightPageSnapshot("/login", page, MOBILE);
  });

  test(TABLET, async ({ page }) => {
    await getFullHeightPageSnapshot("/login", page, TABLET);
  });

  test(DESKTOP, async ({ page }) => {
    await getFullHeightPageSnapshot("/login", page, DESKTOP);
  });
});
