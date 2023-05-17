const viewports = {
	'desktop': {
		width: 1280,
		height: 1024,
		deviceScaleFactor: 2,
		isMobile: false
	},
	'mobile': {
		width: 375,
		height: 812,
		deviceScaleFactor: 2,
		isMobile: true
	}
}

const defaults = {
	includeNotices: false,
	includeWarnings: true,
	reporter: 'json',
	runners: [
		'axe',
		'htmlcs',
	],
	viewport: viewports.desktop
}

module.exports = {
	defaults,
	viewports
}