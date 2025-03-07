import { test, expect } from "@playwright/test";

test.describe("Log in and out", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4321/login");
    await page.fill('input[name="username"]', "test");
    await page.fill('input[name="password"]', "test");
    await page.click('button[type="submit"]');
    await page.waitForURL("http://localhost:4321/");
  });

  test("Page is redirected to root /", async ({ page }) => {
    expect(page.url()).toBe("http://localhost:4321/");
  });

  test("Page has logout button", async ({ page }) => {
    expect(await page.locator("text=Log out").isVisible()).toBe(true);
  });

  test("There's server list heading", async ({ page }) => {
    expect(await page.locator("text=Server list").isVisible()).toBe(true);
  });

  test("Token cookie is set", async ({ context }) => {
    const cookies = await context.cookies();
    const tokenCookie = cookies.find((cookie) => cookie.name === "token");
    expect(tokenCookie).not.toBe(undefined);
  });

  test("Able to log out", async ({ page, context }) => {
    await page.click("text=Log out");
    await page.waitForURL("http://localhost:4321/login");
    const cookies = await context.cookies();
    const tokenCookie = cookies.find((cookie) => cookie.name === "token");
    expect(tokenCookie).toBe(undefined);
  });
});
