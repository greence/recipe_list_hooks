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
		error: false,
		recipesEnded: false
	}

	componentDidMount() {
		this.createRecipesList()
	}

	RecipeService = new RecipeService()

	createRecipesList = async () => {
		this.setState({ loading: true })
		return await this.RecipeService
			.getAllRecipes()
			.then(this.onRecipesLoaded)
			.catch(this.onError)
	}

	onRecipesLoaded = newRecipeList => {
		if (newRecipeList.length < 20) {
			this.setState({ recipesEnded: true })
		}
		this.setState(({ recipeList }) => ({
			recipeList: [...recipeList, ...newRecipeList],
			loading: false
		}))
	}

	onError = () => {
		this.setState({
			loading: false,
			error: true
		})
	}

	render() {
		const { loading, error, recipesEnded } = this.state
		// const btn = recipesEnded ? 'btn btn-primary disabled' : 'btn btn-primary'
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
						onClick={this.createRecipesList}>Show more</button>
				</div>
			</>
		)
	}
}

export default RecipeList