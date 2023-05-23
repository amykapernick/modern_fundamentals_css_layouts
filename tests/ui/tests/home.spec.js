const { test, expect } = require('@playwright/test')

test('Has "Home" in the title', async ( { page }) => {
	await page.goto('/')

	await expect(page).toHaveTitle(/Home/)
})

test('Can click on a recipe', async ( { page }) => {
	await page.goto('/')


	// The title of the page should equal x
	
})


// Test: Recipe has correct title in page
await expect(page).toHaveTitle(/Pasta Salad/)


// Test: Can add a task and it exists
test('Can add a new task', async ({ page }) => {
	const taskName = 'Write tests'

	await page.goto('/tasks')

	await page.getByRole('button', { name: 'Add a Task' }).click();
	
	await page.getByLabel('Task Name').fill(taskName);

	await page.getByRole('button', { name: 'Add', exact: true }).click();

	await page.getByText(taskName).waitFor()
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