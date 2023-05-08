module.exports = {
	extends: [
		`airbnb-base`,
		`plugin:astro/recommended`
	],
	plugins: [
		`import`,
		`jsx-a11y`,
	],
	overrides: [
		{
			files: [`*.astro`],
			parser: `astro-eslint-parser`
		},
	],
	rules: {
		"prettier/prettier": true,
		'linebreak-style': 0,
		'no-tabs': 0,
		camelcase: 0,
		indent: [`error`, `tab`, {
			SwitchCase: 1,
			VariableDeclarator: 1
		}],
		'arrow-spacing': [`error`, { before: true, after: true }],
		'comma-dangle': [
			`error`,
			{
				objects: `only-multiline`,
				arrays: `only-multiline`,
				imports: `never`,
				exports: `never`,
				functions: `never`,
			},
		],
		'no-var': `error`,
		'no-unused-vars': 1,
		'one-var': null,
		quotes: [`error`, `backtick`],
		'no-param-reassign': 0,
		'class-methods-use-this': 0,
		"import/order": [
			"error",
			{
				"groups": [
					"builtin",
					"external",
					"internal",
					"parent",
					"sibling",
					"index",
					"object",
					"type"
				]
			}
		]
	}
};
