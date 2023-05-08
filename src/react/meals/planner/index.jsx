import { addDays, format, setDay } from "date-fns"
import { useEffect, useState } from "react"
import RecipeCard from "../recipeCard"
import days from '@data/meals/days'

import styles from "./styles.module.css"
import getCurrentWeek from "@utils/meals/currentWeek"


const MealPlanner = (props) => {
	const { recipes } = props
	const localRecipes = localStorage.getItem('recipes')
	const [currentWeek, setCurrentWeek] = useState(getCurrentWeek())
	const [currentRecipes, setRecipes] = useState([])
	const allRecipes = {}
	const nextWeek = (date) => addDays(date, 7)
	const previousWeek = (date) => addDays(date, -7)

	recipes.forEach(recipe => {
		allRecipes[recipe.slug] = recipe
	})

	useEffect(() => {
		const week = format(currentWeek, 'yyyy-MM-dd')
		if(!localRecipes) {
			const data = {[week]: []}
			localStorage.setItem('recipes', JSON.stringify(data))
			return;
		}

		const data = JSON.parse(localRecipes)
		setRecipes(data[week] || [])
	}, [])
	
	return (
		<>
			<ul className={styles.nav}>
				<li>{format(currentWeek, 'dd MMM')} - {format(addDays(currentWeek, 6), 'dd MMM')}</li>
				<li>
					<button onClick={() => setCurrentWeek(previousWeek(currentWeek))}>Previous Week</button>
				</li>
				<li>
					<button onClick={() => setCurrentWeek(nextWeek(currentWeek))}>Next Week</button>
				</li>
				<li>
					<button
						onClick={() => setCurrentWeek(addDays(setDay(new Date(), 6), -7))}
					>
						This Week
					</button>
				</li>
			</ul>
			<ul className={styles.week}>
				{days.map(({name, number}) => (
					<li className={styles.day} key={number}>
						<h2>{name}</h2>
						{currentRecipes[number] && 
							<ul className={styles.cards}>
								{currentRecipes[number].map(recipe => (
								<li key={recipe}><RecipeCard recipe={allRecipes[recipe]} /></li>
							))}
							</ul>
						}
					</li>
				))}
			</ul>
		</>
	)
}

export default MealPlanner