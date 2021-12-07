import { Component } from "react"
import RecipeService from "../../services/RecipeService"
import RecipeListItem from "../RecipeListItem/RecipeListItem"
import Spinner from "../Spinner/Spinner"
import Page404 from "../Page404/Page404"
import id from "../../id.json"

import './RandomRecipe.scss'


class RandomRecipe extends Component {
	state = {
		recipe: {},
		loading: true,
		error: false
	}

	getRandomId = () => {
		return id[Math.floor(Math.random() * id.length)]
	}

	recipeService = new RecipeService()
	updateNewRecipe = () => {
		this.setState({ recipe: {}, loading: true })
		this.recipeService
			.getRecipe(this.getRandomId())
			.then(this.onLoadingRecipe)
			.catch(this.onError)
	}

	onLoadingRecipe = recipe => {
		this.setState({
			recipe,
			loading: false
		})
	}

	onError = () => {
		this.setState({
			loading: false,
			error: true
		})
	}


	componentDidMount() {
		this.updateNewRecipe()
	}

	render() {
		const { name, thumbnail, time, homepage } = this.state.recipe
		const { loading, error } = this.state
		const spinner = loading ? <Spinner /> : null
		const error404 = error ? <Page404 /> : null
		const recipe = !(loading || error)
			? <RecipeListItem
				key={homepage}
				name={name}
				thumbnail={thumbnail}
				time={time}
				homepage={homepage}
			/>
			: null

		return (
			<>

				<div className="container">
					<div className="left-column">
						{spinner}
						{recipe}
						{error404}
					</div>
					<div className="right-column">
						<p>Click the button to get a random recipe!</p>
						<button className="btn btn-primary" onClick={this.updateNewRecipe}>Get random recipe</button>
					</div>
				</div>
			</>
		)
	}
}

export default RandomRecipe