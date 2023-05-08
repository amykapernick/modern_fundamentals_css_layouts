export const extractCategories = (recipes) => {
	const categories = [];

	recipes.forEach((recipe) => {
		recipe?.data?.categories?.forEach((category) => {
			categories.push(category);
		});
	});
	
	return categories.filter((cat, index) => categories.indexOf(cat) === index);
}

export const buildCategories = (cats) => {
	const categories = []

	cats.forEach((cat) => {
		categories.push({
			label: cat,
			slug: cat.toLowerCase().replace(/\s/g, '-')
		})
	})

	return categories
}

const generateCategories = (recipes) => {
	const categories = extractCategories(recipes)
	return buildCategories(categories)
}

export const recipeCategories = (categories) => {
	return buildCategories(categories)
}

export default generateCategories