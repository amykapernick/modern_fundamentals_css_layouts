const { test, expect } = require('@playwright/test')

test('Has "Home" in the title', async ({ page }) => {
	await page.goto('/')

	await expect(page).toHaveTitle(/Home/)
})


test('Has a recipes section', async ({ page }) => {
	await page.goto('/')

	page.getByRole('heading', { name: 'Recipes' })
})

test('Matches previous snapshot', async ({ page }) => {
	await page.goto('/')

	await page.waitForLoadState()

	expect(await page.screenshot()).toMatchSnapshot('home.png')
})