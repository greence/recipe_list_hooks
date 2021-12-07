import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Filter from './components/Filter/Filter'
import RecipeList from './components/RecipeList/RecipeList'
import RandomRecipe from './components/RandomRecipe/RandomRecipe'
import Spinner from './components/Spinner/Spinner'

import './App.scss'

const App = () => {

  // generateId = () => {
  //   return Math.floor(Math.random() * 10000)
  // }

  // searchRecipe = (recipesList, searchRequest) => {
  //   if (searchRequest.length === 0) {
  //     return recipesList
  //   }
  //   return recipesList.filter(recipe => {
  //     return recipe.title.toLowerCase().includes(searchRequest.toLowerCase())
  //   })
  // }

  // onSearchInputChange = inputValue => {
  //   this.setState({
  //     searchInput: inputValue
  //   })
  // }

  //Фильтр рецептов по кнопкам
  // filterRecipes = (recipesList, filter) => {
  //   switch (filter) {
  //     case 'favourite':
  //       return recipesList.filter(recipe => recipe.favourite);
  //     case 'new':
  //       return recipesList.filter(recipe => recipe.new);
  //     default:
  //       return recipesList
  //   }
  // }

  // onFilterChange = filter => {
  //   this.setState({ filter })
  // }


  // const filteredRecipes = this.filterRecipes(this.searchRecipe(data, searchInput), filter)

  return (
    <div className="App">
      <Header />
      <Spinner />
      <Search />
      <Filter />
      <RandomRecipe />
      <RecipeList />
    </div>
  )
}

export default App
