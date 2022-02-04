import { useHttp } from "../hooks/http.hook"

const useRecipeService = () => {
	const { loading, requestData, error, clearError } = useHttp()

	const _path = 'https://api.edamam.com/api/recipes/v2'
	const _apiKey = 'app_id=edeb9bdc&app_key=f0000630087b8d1ca9befc20cead5674&random=true'
	const _type = 'type=public'

	const getAllRecipes = async (param) => {
		const res = await requestData(`${_path}?${_type}&q=${param}&${_apiKey}`)
		return res.hits.map(({ recipe }) => _transformRecipe(recipe))
	}

	const getRecipe = async (id) => {
		const res = await requestData(`${_path}/${id}?${_type}&${_apiKey}`)
		return _transformRecipe(res.recipe)
	}

	const _transformRecipe = recipe => {
		return {
			name: recipe.label,
			homepage: recipe.url,
			thumbnail: recipe.image,
			time: recipe.totalTime,
		}
	}

	return { loading, error, clearError, getAllRecipes, getRecipe }
}

export default useRecipeService