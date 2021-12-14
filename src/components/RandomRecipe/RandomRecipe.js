import { useState, useEffect } from "react"
import RecipeService from "../../services/RecipeService"
import RecipeListItem from "../RecipeListItem/RecipeListItem"
import Spinner from "../Spinner/Spinner"
import Page404 from "../Page404/Page404"
import id from "../../id.json"

import './RandomRecipe.scss'


const RandomRecipe = () => {
	const [recipe, setRecipe] = useState({})
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const getRandomId = () => {
		return id[Math.floor(Math.random() * id.length)]
	}

	const recipeService = new RecipeService()
	const updateNewRecipe = () => {
		setRecipe({})
		setLoading(true)
		recipeService.getRecipe(getRandomId())
			.then(onLoadingRecipe)
			.catch(onError)
	}

	const onLoadingRecipe = recipe => {
		setRecipe(recipe)
		setLoading(false)
	}

	const onError = () => {
		setLoading(false)
		setError(true)
	}

	useEffect(() => {
		updateNewRecipe()
	}, [])

	const spinner = loading ? <Spinner /> : null
	const error404 = error ? <Page404 /> : null
	const showRecipe = !(loading || error)
		? <RecipeListItem
			key={recipe.homepage}
			name={recipe.name}
			thumbnail={recipe.thumbnail}
			time={recipe.time}
			homepage={recipe.homepage}
		/>
		: null

	return (
		<>
			<div className="container">
				<div className="left-column">
					{spinner}
					{showRecipe}
					{error404}
				</div>
				<div className="right-column">
					<p>Click the button to get a random recipe!</p>
					<button className="btn btn-primary" onClick={updateNewRecipe}>Get random recipe</button>
				</div>
			</div>
		</>
	)
}

export default RandomRecipe