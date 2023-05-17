const pa11y = require('pa11y')
const fs = require('file-system')
const { defaults, viewports } = require('./pa11y.config')

const url = 'http://localhost:3000'

pa11y(url, {
	...defaults
})
	.then(res => {
		// console.log({...res})

		fs.writeFileSync(
			`tests/a11y/results/pa11y.json`, 
			JSON.stringify(res, null, 4)
		)
	}).catch(err => {
		console.log({err})
	})


Promise.all([
	pa11y(`${url}/recipes`, {
		...defaults,
	}),
	pa11y(`${url}/meals/list`, {
		...defaults,
	}),
	pa11y(`${url}/calendar`, {
		...defaults,
	}),
	pa11y(`${url}/tasks`, {
		...defaults,
	}),
])
	.then(res => {
		// console.group({res})

		res.forEach(test => {
			// console.log({test})

			fs.writeFileSync(
				`tests/a11y/results/${test.pageUrl.replace(url, '')}.json`, 
				JSON.stringify(test, null, 4)
			)
		})
	})
	.catch(err => {
		console.log({err})
	})