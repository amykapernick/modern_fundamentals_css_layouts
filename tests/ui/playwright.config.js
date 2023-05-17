const { defineConfig, devices } = require('@playwright/test');
const dotenv = require('dotenv');

dotenv.config();

let webServer = {
	command: 'npm run dev',
	url: 'http://localhost:3000',
	reuseExistingServer: !process.env.CI,
}

if (process.env.SITE_URL) {
	webServer = undefined
}

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
	webServer: webServer,
	testDir: './tests',
	outputDir: './results/assets',
	snapshotPathTemplate: './results/snapshots/{testFilePath}/{arg}{ext}',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	reporter: [
		['html', { outputFolder: './results/reports' }]
	],
	use: {
		baseURL: process.env.SITE_URL || 'http://localhost:3000',
		trace: 'on-first-retry',
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},

		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] },
		},

		/* Test against mobile viewports. */
		{
			name: 'Mobile Chrome',
			use: { ...devices['Pixel 5'] },
		},

	],
});

