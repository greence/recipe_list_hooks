const _path = 'https://api.edamam.com/api/recipes/v2'
const _apiKey = 'app_id=edeb9bdc&app_key=f0000630087b8d1ca9befc20cead5674'
const _type = 'type=public'

class RecipeService {
	getData = async url => {
		let res = await fetch(url)

		if (!res.ok) {
			throw new Error(`Could not get data, status: ${res.status}`)
		}

		return await res.json()
	}

	getAllRecipes = async () => {
		const res = await this.getData(`${_path}?${_type}&q=meat&${_apiKey}`)
		return res.hits.map(({ recipe }) => this._transformRecipe(recipe))
	}

	getRecipe = async (id) => {
		const res = await this.getData(`${_path}/${id}?${_type}&${_apiKey}`)
		return this._transformRecipe(res.recipe)
	}

	_transformRecipe = recipe => {
		return {
			name: recipe.label,
			homepage: recipe.url,
			thumbnail: recipe.image,
			time: recipe.totalTime,
		}
	}

}

export default RecipeService