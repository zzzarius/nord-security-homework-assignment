import { expect, test } from "@playwright/test";
import { testWithTokenCookie } from "./fixtures/TokenCookie.fixture";

test.describe("Servers Sorting", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4321/");
  });

  testWithTokenCookie("Sorting by country", async ({ page }) => {
    const initialFirstItem = await page
      .getByRole("listitem")
      .first()
      .textContent();
    expect(initialFirstItem).toContain("Lithuania");
    await page.click("text=Country");
    const ascSortedFirstItem = await page
      .getByRole("listitem")
      .first()
      .textContent();
    expect(initialFirstItem).not.toEqual(ascSortedFirstItem);
    expect(ascSortedFirstItem).toContain("Latvia");
    await page.click("text=Country");
    const decSortedFirstItem = await page
      .getByRole("listitem")
      .first()
      .textContent();
    expect(decSortedFirstItem).toContain("United States");
    await page.click("text=Country");
    const notSortedFirstItem = await page
      .getByRole("listitem")
      .first()
      .textContent();
    expect(notSortedFirstItem).toContain("Singapore");
  });

  testWithTokenCookie("Sorting by distance", async ({ page }) => {
    const initialFirstItem = await page
      .getByRole("listitem")
      .first()
      .textContent();
    expect(initialFirstItem).toContain("16 km");
    const distanceButton = await page
      .getByRole("button")
      .filter({ hasText: "Distance" })
      .first();
    await distanceButton.click();
    const decSortedFirstItem = await page
      .getByRole("listitem")
      .first()
      .textContent();
    expect(decSortedFirstItem).toContain("1548 km");
    await distanceButton.click();
    const notSortedItems = await page
      .getByRole("listitem")
      .first()
      .textContent();
    expect(notSortedItems).toContain("696 km");
  });
});
