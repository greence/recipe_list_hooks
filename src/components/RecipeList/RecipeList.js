import RecipeListItem from '../RecipeListItem/RecipeListItem'
import { Component } from 'react'
import RecipeService from '../../services/RecipeService'
import Spinner from '../Spinner/Spinner'
import Page404 from '../Page404/Page404'
import './RecipeList.scss'

class RecipeList extends Component {
	state = {
		recipeList: [],
		loading: true,
		error: false
	}
	RecipeService = new RecipeService()
	createRecipesList = async () => {
		return await this.RecipeService
			.getAllRecipes()
			.then(this.onRecipesLoaded)
			.catch(this.onError)
	}

	onRecipesLoaded = recipes => {
		this.setState({
			recipeList: recipes,
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
		this.createRecipesList()
	}

	render() {
		const { loading, error } = this.state
		const spinner = loading ? <Spinner /> : null
		const page404 = error ? <Page404 /> : null
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
				{spinner}
				{page404}
				{list}
			</ul>
		)
	}
}

export default RecipeList