import { format } from "date-fns"
import formatIngredients from "@utils/meals/parseIngredients"
import { useEffect, useState } from "react"
import getCurrentWeek from "@utils/meals/currentWeek"

import styles from "./styles.module.css"
import classes from "@utils/classes.cjs"

const ShoppingList = (props) => {
	const { recipes } = props
	const localRecipes = localStorage.getItem('recipes')
	const [currentWeek, setCurrentWeek] = useState(format(getCurrentWeek(), 'yyyy-MM-dd'))
	const [ingredientsList, setIngredientsList] = useState([])
	const allRecipes = {}

	recipes.forEach(recipe => {
		allRecipes[recipe.slug] = recipe
	})

	useEffect(() => {
		if(!localRecipes) return;

		const data = JSON.parse(localRecipes)
		const currentRecipes = data[currentWeek] || []
		const ingredients = {}

		currentRecipes?.forEach(day => {
			day?.forEach((r) => {
				const recipe = allRecipes[r]?.data

				if(!recipe) return;

				const i = formatIngredients(recipe.ingredients)
				
				i.forEach(item => {
					const info = {
						recipe: recipe.title,
					}

					if(!item?.ingredient) {
						console.log({item, recipe})
						return;
					}

					const name = item.ingredient.toLowerCase()

					if(item.quantity || item.unit) {
						info.quantity = `${item.quantity || ''} ${item.unit || ''}`
					}

					if(!ingredients[name]) {
						ingredients[name] = []
					}

					ingredients[name].push(info)
				})
			})
		})

		const list = Object.keys(ingredients)
		.map(key => 
			({item: key, quantities: ingredients[key]})
		).sort((a, b) => a.item.localeCompare(b.item))

		setIngredientsList(list)

	}, [localRecipes])
	
	return (
		<>
			<ul className={classes(styles.list, 'shopping_list')}>
				{ingredientsList.map(({item, quantities}) => {
					const slug = item.replace(/ /g, '-')
					return (
						<li key={slug} className={classes(styles.item, 'list_item')}>
							<input type="checkbox" name="shopping_list" value={slug} id={slug} />
							<label htmlFor={slug}>{item}</label>
							<ul className={styles.options}>{quantities.map(q => (
								<li key={q.recipe}>{q.quantity} <em>({q.recipe})</em></li>
							))}</ul>
						</li>
					)
				})}
			</ul>
		</>
	)
}

export default ShoppingList