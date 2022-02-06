import { useState, useEffect } from "react"
import useRecipeService from "../../services/RecipeService"
import RecipeListItem from "../RecipeListItem/RecipeListItem"
import Spinner from "../Spinner/Spinner"
import Page404 from "../Page404/Page404"
import id from "../../id.json"

import './RandomRecipe.scss'


const RandomRecipe = () => {
	const [recipe, setRecipe] = useState({})

	const getRandomId = () => {
		return id[Math.floor(Math.random() * id.length)]
	}

	const { loading, error, clearError, getRecipe } = useRecipeService()

	const updateNewRecipe = () => {
		clearError()
		setRecipe({})
		getRecipe(getRandomId())
			.then(onLoadingRecipe)
	}

	const onLoadingRecipe = recipe => {
		setRecipe(recipe)
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
					<p className="right-column-description">Click the button to get a random recipe</p>
					<button className="btn" onClick={updateNewRecipe}>Click me!</button>
				</div>
			</div>
		</>
	)
}

export default RandomRecipe