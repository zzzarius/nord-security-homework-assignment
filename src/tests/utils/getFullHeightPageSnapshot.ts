import { type Page, expect } from "@playwright/test";

export const MOBILE = "mobile";
export const TABLET = "tablet";
export const DESKTOP = "desktop";

const breakpoints = { [MOBILE]: 360, [TABLET]: 768, [DESKTOP]: 1400 } as const;

export async function getFullHeightPageSnapshot(
  slug: string,
  page: Page,
  breakpoint: keyof typeof breakpoints,
) {
  await page.goto(slug);
  await page.setViewportSize({ width: breakpoints[breakpoint], height: 400 });
  const body = await page.$("body");

  // Get full height of the page
  const { height } = (await body?.evaluate(
    (el: HTMLElement): { height: number } => ({
      height: el.scrollHeight,
    }),
  )) ?? { height: 1080 };
  await page.setViewportSize({ width: breakpoints[breakpoint], height });

  await expect(page).toHaveScreenshot();
}
