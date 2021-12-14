class RecipeService {
	_path = 'https://api.edamam.com/api/recipes/v2'
	_apiKey = 'app_id=edeb9bdc&app_key=f0000630087b8d1ca9befc20cead5674&random=true'
	_type = 'type=public'


	getData = async url => {
		let res = await fetch(url)

		if (!res.ok) {
			throw new Error(`Could not get data, status: ${res.status}`)
		}

		return await res.json()
	}

	getAllRecipes = async () => {
		const res = await this.getData(`${this._path}?${this._type}&q=meat&${this._apiKey}`)
		return res.hits.map(({ recipe }) => this._transformRecipe(recipe))
	}

	getRecipe = async (id) => {
		const res = await this.getData(`${this._path}/${id}?${this._type}&${this._apiKey}`)
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