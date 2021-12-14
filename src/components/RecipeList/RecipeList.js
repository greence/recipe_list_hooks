import { useState, useEffect } from 'react'
import RecipeListItem from '../RecipeListItem/RecipeListItem'
import Spinner from '../Spinner/Spinner'
import Page404 from '../Page404/Page404'
import RecipeService from '../../services/RecipeService'
import './RecipeList.scss'


const RecipeList = () => {

	const [recipeList, setRecipeList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [recipesEnded, setRecipesEnded] = useState(false);

	const recipeService = new RecipeService();

	useEffect(() => {
		createRecipesList();
	}, [])

	const createRecipesList = () => {
		setLoading(true)
		recipeService.getAllRecipes()
			.then(onRecipesLoaded)
			.catch(onError)
	}

	//disable button if the quantity of items is less 20
	const onRecipesLoaded = newRecipeList => {
		if (newRecipeList.length < 20) {
			setRecipesEnded(true)
		}
		setRecipeList(recipeList => [...recipeList, ...newRecipeList])
		setLoading(false)
	}

	const onError = () => {
		setLoading(false)
		setError(true)
	}

	// const btn = recipesEnded ? 'btn btn-primary disabled' : 'btn btn-primary'
	const spinner = loading ? <Spinner /> : null
	const page404 = error ? <Page404 /> : null
	const list = recipeList.map(recipe =>
		<RecipeListItem
			key={recipe.homepage}
			name={recipe.name}
			thumbnail={recipe.thumbnail}
			time={recipe.time}
			homepage={recipe.homepage}
		/>)

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
					style={{ display: recipesEnded ? 'none' : 'block' }}
					onClick={createRecipesList}>Show more</button>
			</div>
		</>
	)
}

export default RecipeList