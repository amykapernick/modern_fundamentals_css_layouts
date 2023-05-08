export const unitLookup = {
	tbsp: 'tablespoon',
	gram: 'g',
	grams: 'g',
	tsp: 'teaspoon'
}

const units = [
	'tablespoon',
	'clove',
	'piece',
	'g',
	'gram',
	'teaspoon',
	'sprig',
	'handful',
	'bulb',
	'tsp',
	'tbsp',
	'cup',
	'tin',
	'bunch'
]
const matchQuantity = '(?<quantity>(\\d|\\/|\\.|-| )+(?:cm)*)*'
const matchUnit = `(?:(?<unit>${units.join('|')})s* )`
const matchIngredient = '(?<ingredient>.+?)'

const formatIngredients = (ingredients) => {
	const match = `^${matchQuantity} *${matchUnit}*(?:of )*${matchIngredient}$`
	let ingredientList = []

	ingredients.forEach(i => {
		let data = {}

		if(i.match(RegExp(/^#/, 'i'))) {
			data.category = i.replace(RegExp(/^#/), '')

		}
		else {
			data.full = i

			const matches = i.match(RegExp(match, 'i'))
	
			if(matches?.groups) {
				data = {
					...data,
					...matches.groups
				}
			}

			if(data.unit && unitLookup[data.unit]) {
				data.unit = unitLookup[data.unit]
			}
		}		

		ingredientList.push(data)
	})

	return ingredientList
}

export default formatIngredients