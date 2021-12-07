import RecipeListItem from '../RecipeListItem/RecipeListItem'
import { Component } from 'react'
import RecipeService from '../../services/RecipeService'
import './RecipeList.scss'

class RecipeList extends Component {
	state = {
		recipeList: []
	}
	RecipeService = new RecipeService()
	createRecipesList = async () => {
		return await this.RecipeService
			.getAllRecipes()
			.then(res => this.setState({ recipeList: res }))
	}

	componentDidMount() {
		this.createRecipesList()
	}

	render() {
		const list = this.state.recipeList.map(recipe =>
			<RecipeListItem
				key={recipe.homepage}
				name={recipe.name}
				thumbnail={recipe.thumbnail}
				time={recipe.time}
				homepage={recipe.homepage}
			/>)

		return (
			<ul className='recipe-list'>
				{list}
			</ul>
		)
	}
}

export default RecipeList