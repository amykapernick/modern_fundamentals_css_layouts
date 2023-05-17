const { test, expect } = require('@playwright/test')

test('Has "Recipes" in the title', async ({ page }) => {
	await page.goto('/recipes')

	await expect(page).toHaveTitle(/Recipes/)
})

test('Can navigate to a recipe', async ({ page }) => {
	await page.goto('/recipes')

	await page.getByTestId('recipeFeed').getByRole('link').first().click()

	await expect(page).toHaveTitle(/Recipe/)
})

test('Can add a recipe to the planner', async ({ page }) => {
	await page.goto('/recipes')

	const recipe = page.getByTestId('recipeFeed').getByRole('listitem').nth(4)
	const saveButton = recipe.getByRole('button', { name: 'Save Recipe' })

	await saveButton.click()

	await recipe.getByRole('button', { name: 'Fri' }).click()

	const recipeTitle = await recipe.getByRole('heading').textContent()

	await page.getByTestId('header').getByRole('button', { name: 'Meals' }).click()
	await page.getByTestId('header').getByRole('link', { name: 'Meal Planner' }).click()

	await expect(page).toHaveTitle(/Meal Planning/)

	await page.getByRole('heading', { name: recipeTitle }).waitFor()

	await expect(page.getByRole('heading', { name: recipeTitle })).toContainText(recipeTitle)
})

test('Recipe in planner adds to shopping list', async ({ page }) => {
	await page.goto('/recipes')

	const recipe = page.getByTestId('recipeFeed').getByRole('listitem').nth(2)
	const saveButton = recipe.getByRole('button', { name: 'Save Recipe' })

	await saveButton.click()

	await recipe.getByRole('button', { name: 'Wed' }).click()

	const recipeTitle = await recipe.getByRole('heading').textContent()

	await page.getByTestId('header').getByRole('button', { name: 'Meals' }).click()
	await page.getByTestId('header').getByRole('link', { name: 'Shopping List' }).click()

	const shoppingList = page.getByTestId('shoppingList')

	await expect(page).toHaveTitle(/Shopping List/)

	await expect(shoppingList.getByRole('checkbox').first()).toBeVisible()

	await expect(shoppingList.getByRole('listitem').filter({ hasText: recipeTitle }).first()).toBeVisible()
})

test('Recipes page matches previous snapshot', async ({ page }) => {
	await page.goto('/recipes')

	await page.waitForLoadState()

	expect(await page.screenshot()).toMatchSnapshot('recipes.png')
})

test('Meal Planning page matches previous snapshot', async ({ page }) => {
	await page.goto('/meals/planning')

	await page.waitForLoadState()

	expect(await page.screenshot()).toMatchSnapshot('planner.png')
})

test('Shopping list page matches previous snapshot', async ({ page }) => {
	await page.goto('/meals/list')

	await page.waitForLoadState()

	expect(await page.screenshot()).toMatchSnapshot('list.png')
})