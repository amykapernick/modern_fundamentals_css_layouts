const { test, expect } = require('@playwright/test')

test('Has "To Do List" in the title', async ({ page }) => {
	await page.goto('/tasks')

	await expect(page).toHaveTitle(/To Do List/)
})


test('Can add a new task', async ({ page }) => {
	const taskName = 'Write tests'

	await page.goto('/tasks')

	await page.getByRole('button', { name: 'Add a Task' }).click();
	
	await page.getByLabel('Task Name').fill(taskName);

	await page.getByRole('button', { name: 'Add', exact: true }).click();

	await page.getByText(taskName).waitFor()
})


test('To Do List page matches previous snapshot', async ({ page }) => {
	await page.goto('/tasks')

	await page.waitForLoadState()

	expect(await page.screenshot()).toMatchSnapshot('tasks.png')
})