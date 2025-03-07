import { test } from "@playwright/test";
import {
  DESKTOP,
  MOBILE,
  TABLET,
  getFullHeightPageSnapshot,
} from "./utils/getFullHeightPageSnapshot";

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
