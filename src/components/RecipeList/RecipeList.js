import './RecipeList.css'
import RecipeListItem from '../RecipeListItem/RecipeListItem'


const RecipeList = ({ data }) => {
	const list = data.map(recipe => {
		return (
			// <RecipeListItem key={recipe.title} title={recipe.title} ingridients={recipe.ingridients} />
			<RecipeListItem key={recipe.title} {...recipe} />
		)
	})
	return (
		<ul className='recipe-list'>
			{list}
		</ul>
	)
}

export default RecipeList