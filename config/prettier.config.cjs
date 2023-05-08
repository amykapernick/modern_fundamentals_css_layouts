const astro = require('prettier-plugin-astro')

module.exports = {
	plugins: [
		astro
	],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro'
			}
		}
	],
	tabWidth: 4,
	useTabs: true,
	semi: true,
	singleQuote: true,
	quoteProps: `consistent`,
	jsxSingleQuote: true,
	trailingComma: `all`,
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: `always`,
	endOfLine: `lf`,
	singleAttributePerLine: true,
	astroAllowShorthand: true,
};
