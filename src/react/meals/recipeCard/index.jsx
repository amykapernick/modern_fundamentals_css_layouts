import formatTime from '@utils/meals/formatTime';
import Fallback from '@img/icons/fish.svg?url';

import styles from './styles.module.css'

const RecipeCard = (props) => {
	const { recipe } = props
	const image = recipe.data.image || Fallback
	
	return (
		<div className={styles.card}>
			<img
				src={image}
				alt=''
				className={styles.image}
			/>
			<h3><a href={`/recipes/${recipe.slug}`}>{recipe.data.title}</a></h3>
			{
				recipe.data.difficulty && (
					<span className={styles.difficulty}>
						{recipe.data.difficulty}
					</span>
				)
			}
			{
				recipe.data.time && (
					<span className={styles.time}>
						{formatTime(recipe.data.time)}
					</span>
				)
			}
		</div>
	)
}

export default RecipeCard