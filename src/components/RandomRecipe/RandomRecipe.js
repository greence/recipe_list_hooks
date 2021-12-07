import { Component } from "react"
import RecipeService from "../../services/RecipeService"
import RecipeListItem from "../RecipeListItem/RecipeListItem"
import id from "../../id.json"

import './RandomRecipe.scss'


class RandomRecipe extends Component {
	state = {}

	getRandomId = () => {
		return id[Math.floor(Math.random() * id.length)]
	}

	recipeService = new RecipeService()
	updateNewRecipe = () => {
		this.recipeService
			.getRecipe(this.getRandomId())
			.then(res => this.setState(res))
	}

	componentDidMount() {
		this.updateNewRecipe()
	}

	render() {
		const { name, thumbnail, time, homepage } = this.state
		return (
			<>
				<div className="container">
					<RecipeListItem
						key={homepage}
						name={name}
						thumbnail={thumbnail}
						time={time}
						homepage={homepage}
					/>
					<div className="right-column">
						<p>Click the button to get a random recipe!</p>
						<button className="btn btn-primary" onClick={this.updateNewRecipe}>Random recipe</button>
					</div>
				</div>
			</>
		)
	}
}

export default RandomRecipe