const { test, expect } = require('@playwright/test')

test('Has "Home" in the title', async ({ page, baseURL }) => {
	await page.goto('/')

	page.on('console', (msg) => {
		console.log(msg)
	})

	console.log({baseURL, page})

	await expect(page).toHaveTitle(/Home/)
})


test('Has a recipes section', async ({ page }) => {
	await page.goto('/')

	page.getByRole('heading', { name: 'Recipes' })
})
