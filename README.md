# Homework

## Setup

- `cp .env.example .env` and fill out the variables
- run `npx playwright install` to be able to run e2e tests locally

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| Astro commands            |                                                  |
| `npm install`             | Install dependencies                             |
| `npm run dev`             | Start  local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| Other commands            |                                                  |
| `npm run lint`            | Check for formatting & code issues               |
| `npm run lint:fix`        | Autofix formatting & code issues where possible  |
| `npm run e2e`             | Run e2e (playwright) tests                       |
| `npm run e2e:update`      | Update snapshots for e2e  (playwright) tests     |
| `npm run vitest`          | Run vitest unit tests and watch for file changes |
| `npm run vitest:run`      | Run vitest once without watching for changes     |
| `npm run test`            | Runs vitest and e2e (playwright) tests           |
| `npm run test:update`     | Update snapshots for all tests                   |

## Tests

There are two types of tests

- End-to-end - using [Playwright](https://playwright.dev/docs/intro). For
  making accurate snapshots (screenshots) to be able to catch regressions
  early. And for testing critical business logic using actual browser as
  end user would.
- Unit tests - using [Vitest](https://vitest.dev/guide/). For testing
  validity of the functions.
