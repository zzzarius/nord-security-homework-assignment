import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  webServer: {
    command: "export CI=true && npm run dev",
    url: "http://localhost:4321/",
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: "http://localhost:4321",
  },
  outputDir: "playwright-test-results",
  testDir: "./src",
  testMatch: ["**/*.snapshot.ts", "**/*.e2e.ts", "**/*.spec.ts"],
  name: "firefox", // Firefox has less differences between platforms
  projects: [
    {
      name: "firefox",
      use: {
        browserName: "firefox",
      },
    },
  ],
  snapshotPathTemplate:
    "./src/{testFilePath}/{arg}/../../__snapshots__/{arg}{ext}",
  expect: {
    toMatchSnapshot: {
      maxDiffPixelRatio: 0.01,
    },
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.01,
    },
  },
};

export default config;
