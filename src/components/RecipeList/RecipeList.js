import './RecipeList.css'
import RecipeListItem from '../RecipeListItem/RecipeListItem'


const RecipeList = ({ data, deleteRecipe }) => {

	const list = data.map(recipe => {
		const { id, ...recipeProps } = recipe
		return (
			// <RecipeListItem key={recipe.title} title={recipe.title} ingridients={recipe.ingridients} />
			<RecipeListItem
				key={recipe.id}
				{...recipeProps}
				deleteRecipe={() => { deleteRecipe(id) }}
			/>
		)
	})
	return (
		<ul className='recipe-list'>
			{list}
		</ul>
	)
}

export default RecipeList