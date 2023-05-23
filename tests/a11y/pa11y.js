const pa11y = require('pa11y')
const fs = require('file-system')
const { defaults } = require('./pa11y.config')

// pa11y('http://localhost:3000', {
// 	...defaults
// })
// 	.then((results) => {
// 		// console.log({results})

// 		fs.writeFileSync(
// 			`tests/a11y/results/pa11y.json`,
// 			JSON.stringify(results, null, 4)
// 		)
// 	})
// 	.catch((err) => {
// 		console.log({err})
// 	})

const url = 'http://localhost:3000'

Promise.all([
	pa11y('http://localhost:3000', {
		...defaults
	}),
	pa11y('http://localhost:3000/calendar', {
		...defaults
	})
])
	.then(results => {
		results.forEach(test => {
			fs.writeFileSync(
				`tests/a11y/results/${test.pageUrl.replace(url, '')}.json`,
				JSON.stringify(test, null, 4)
			)
		})
	})