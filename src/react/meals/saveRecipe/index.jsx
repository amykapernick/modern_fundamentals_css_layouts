import { useRef, useState, useEffect } from 'react'
import { setDay, format } from 'date-fns'
import days from '@data/meals/days'
import styles from "./styles.module.css"
import getCurrentWeek from '@utils/meals/currentWeek'

const SaveRecipe = (props) => {
	const {recipe, className, ...args} = props
	const [open, setOpen] = useState(false)
	const currentDate = getCurrentWeek()
	const currentWeek = format(currentDate, 'yyyy-MM-dd')
	const [savedRecipes, setRecipes] = useState([])
	const refs = days.map(() => useRef(null))
	const saveRecipe = (day) => {
		const ref = refs[day].current
		const allSaved = localStorage.getItem('recipes') || '{}'
		const recipes = JSON.parse(allSaved)[currentWeek]

		if(!ref) return

		if(!recipes[day]) recipes[day] = []
		
		if(ref?.getAttribute('data-selected') === 'true') {
			ref.setAttribute('data-selected', 'false')

			recipes[day] = recipes[day].filter((item) => item !== recipe)
		} else {
			ref.setAttribute('data-selected', 'true')

			recipes[day].push(recipe)
		}

		setRecipes(recipes)

		localStorage.setItem('recipes', JSON.stringify({
			...JSON.parse(allSaved),
			[currentWeek]: recipes
		}))

		setOpen(false)
	}

	useEffect(() => {
		const localRecipes = localStorage.getItem('recipes') || '{}'
		const data = JSON.parse(localRecipes)

		if(!data?.[currentWeek]) {
			data[currentWeek] = []
			localStorage.setItem('recipes', JSON.stringify(data))
		}

		setRecipes(data[currentWeek] || [])
	}, [])


	return (
		<div
			className={[className, styles.container].join(' ')}
			{...args}
		>
			<button
				onClick={() => setOpen(!open)}
				className={styles.button}
			>
				Save Recipe {format(currentDate, 'dd-MMM')}
			</button>
			{open && (
				<ul className={styles.list}>
					{days.map(({name, number}) => {
						return (
							<li key={number}>
								<button 
									data-selected={savedRecipes[number]?.includes(recipe) ? 'true' : 'false'}
									ref={refs[number]}
									className={styles.button}
									onClick={() => saveRecipe(number)}
								>
									{name} {format(setDay(currentDate, number, {weekStartsOn: 6}), 'dd-MMM')}
								</button>
							</li>
						)
					})}
				</ul>
			)}
		</div>
	)
}

export default SaveRecipe