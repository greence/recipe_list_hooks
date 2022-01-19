import { useState, useEffect } from 'react'
import RecipeListItem from '../RecipeListItem/RecipeListItem'
import Spinner from '../Spinner/Spinner'
import Page404 from '../Page404/Page404'
import useRecipeService from '../../services/RecipeService'
import './RecipeList.scss'


const RecipeList = () => {
	const [recipeList, setRecipeList] = useState([])
	const [recipesEnded, setRecipesEnded] = useState(false)
	const { loading, error, getAllRecipes } = useRecipeService()

	useEffect(() => {
		createRecipesList()
	}, [])

	const createRecipesList = () => {
		getAllRecipes()
			.then(onRecipesLoaded)
	}

	//disable button if the quantity of items is less 20
	const onRecipesLoaded = newRecipeList => {
		if (newRecipeList.length < 20) {
			setRecipesEnded(true)
		}
		setRecipeList(recipeList => [...recipeList, ...newRecipeList])
	}

	// const btn = recipesEnded ? 'btn btn-primary disabled' : 'btn btn-primary'
	const spinner = loading ? <Spinner /> : null
	const page404 = error ? <Page404 /> : null
	const list = !(loading || error)
		? recipeList.map(recipe =>
			<RecipeListItem
				key={recipe.homepage}
				name={recipe.name}
				thumbnail={recipe.thumbnail}
				time={recipe.time}
				homepage={recipe.homepage}
			/>)
		: null

	return (
		<>
			<h2>Recipes list</h2>
			<ul className='recipe-list'>
				{page404}
				{list}
			</ul>
			{spinner}
			<div className="btn-load">
				<button
					type="button"
					className="btn btn-primary"
					style={{ display: recipesEnded || loading ? 'none' : 'block' }}
					onClick={createRecipesList}>Show more</button>
			</div>
		</>
	)
}

export default RecipeList