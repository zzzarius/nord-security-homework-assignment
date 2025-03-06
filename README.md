# Homework

## Setup

- `cp .env.example .env` and fill out the variables
- `npx playwright install` to be able to test locally

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| Astro commands         |                                                  |
| `npm install`         | Installs dependencies                            |
| `npm dev`             | Starts local dev server at `localhost:4321`      |
| `npm build`           | Build your production site to `./dist/`          |
| `npm preview`         | Preview your build locally, before deploying     |
| `npm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm astro -- --help` | Get help using the Astro CLI                     |
| Other commands         |                                                  |
| `npm e2e`             | Run e2e (playwright) tests                       |
| `npm e2e:update`      | Update snapshots for e2e  (playwright) tests     |
| `npm vitest`          | Run vitest unit tests and watch for file changes |
| `npm vitest:run`      | Run vitest once without watching for changes     |
| `npm test:update`     | Update snapshots for all tests                   |
| `npm test`            | Runs vitest and e2e (playwright) tests           |

## Tests

There are two types of tests

- End-to-end - using [Playwright](https://playwright.dev/docs/intro). For
  making accurate snapshots (screenshots) to be able to catch regressions
  early. And for testing critical business logic using actual browser as
  end user would.
- Unit tests - using [Vitest](https://vitest.dev/guide/). For testing
  validity of the functions.