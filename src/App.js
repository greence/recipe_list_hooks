import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Filter from './components/Filter/Filter'
import RecipeList from './components/RecipeList/RecipeList'
import RandomRecipe from './components/RandomRecipe/RandomRecipe'

import './App.scss'

const App = () => {

  return (
    <div className="App">
      <Header />
      <Search />
      <Filter />
      <RandomRecipe />
      <RecipeList />
    </div>
  )
}

export default App
