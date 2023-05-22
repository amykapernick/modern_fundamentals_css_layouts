# UI Testing

When making changes to large codebases, at some point a change will inevitably bleed out to somewhere we didn’t intend it to, which is why UI testing is really useful. With these tests we can ensure that our application’s parts still exist and can be interacted with.

A lot of testing tools for end-to-end testing can be used for UI testing, one of which is [Playwright](https://playwright.dev/), an open source testing tool that’s easy to get started with. It initialises a project and sets it up with example tests for us.

```bash
npm init playwright@latest
```

Playwright tests are written with [assertions](https://playwright.dev/docs/test-assertions) the same as a lot of other testing tools, where we can find sections and information on the page and check whether the values/content exists that is supposed to.

```bash
const { test, expect } = require('@playwright/test')

test('Has "My Website" in the title', async ({ page }) => {
	await page.goto('/')

	await expect(page).toHaveTitle(/My Website/)
})
```

We can then run the tests we’ve written using the `npx playwright test` command, depending on the options being used we can also use a [test runner](https://playwright.dev/docs/test-ui-mode) to more easily visualise what is being tested.

> 👩🏾‍💻 Create a test file in `tests/ui/tests/home.spec.js` and check that the page title is what it’s supposed to be on one of the pages.
****Note****: There’s an npm script for *test:ui* that you can use to run the test
> 

Playwright also has a [test generator](https://playwright.dev/docs/codegen) to make it easier to write the tests by interacting with the website.

> 🧑🏾‍💻 Use the test generator to create more tests for the website, including:
> 
> - Accessing a recipe from the homepage
> - Saving a recipe to the meal planner and checking it exists
> - Create a new task and checking it exists
> - Adding a new event to the calendar and checking it exists