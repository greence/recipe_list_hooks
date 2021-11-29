import { Component } from 'react'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Filter from './components/Filter/Filter'
import RecipeAddForm from './components/RecipeAddForm/RecipeAddForm'
import RecipeList from './components/RecipeList/RecipeList'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: 'Французские круассаны',
          ingridients: ['молоко', 'вода', 'масло сливочное', 'мука', 'соль', ' сахар', 'дрожжи сухие', 'яйца'],
          time: '45 мин',
          img: '',
          new: true,
          favourite: false,
          id: 456
        },
        {
          title: 'Маффины',
          ingridients: ['куриные яйца', 'сахар', 'сливочное масло', 'растительное масло', 'разрыхлитель', 'мука', 'ванильный сахар', 'джем', 'куриные яйца', 'сахар', 'сливочное масло', 'растительное масло', 'разрыхлитель', 'мука', 'ванильный сахар', 'джем', 'куриные яйца', 'сахар', 'сливочное масло', 'растительное масло', 'разрыхлитель', 'мука', 'ванильный сахар', 'джем'],
          time: '60 мин',
          img: '',
          label: '',
          favourite: false,
          id: 458
        },
        {
          title: 'Чизкейк Брауни',
          ingridients: ['темный шоколад', 'сливочное масло', 'яйцо', 'сахар', 'мука', 'сливочный сыр', 'сливки 10%'],
          time: '50 мин',
          img: '',
          label: '',
          favourite: false,
          id: 569
        }
      ],
      searchInput: '',
      filter: 'all'
    }
  }

  addToFavourite = id => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {
            ...item,
            favourite: !item.favourite
          }
        }
        return item
      })
    }))
  }

  deleteRecipe = id => {
    const newRecipeList = this.state.data.filter(recipe => recipe.id !== id)
    this.setState({ data: newRecipeList })
  }

  generateId = () => {
    return Math.floor(Math.random() * 10000)
  }

  addNewRecipe = (title, ingridients) => {
    const newRecipe = {
      title,
      ingridients,
      id: this.generateId(),
      favourite: false,
      time: '',
      img: '',
      label: '',
    }

    let newData = [...this.state.data, newRecipe]
    this.setState({
      data: newData
    })
  }

  searchRecipe = (recipesList, searchRequest) => {
    if (searchRequest.length === 0) {
      return recipesList
    }
    return recipesList.filter(recipe => {
      return recipe.title.toLowerCase().includes(searchRequest.toLowerCase())
    })
  }

  onSearchInputChange = inputValue => {
    this.setState({
      searchInput: inputValue
    })
  }

  //Фильтр рецептов по кнопкам
  filterRecipes = (recipesList, filter) => {
    switch (filter) {
      case 'favourite':
        return recipesList.filter(recipe => recipe.favourite);
      case 'new':
        return recipesList.filter(recipe => recipe.new);
      default:
        return recipesList
    }
  }

  onFilterChange = filter => {
    this.setState({ filter })
  }

  render() {
    const { data, searchInput, filter } = this.state
    const filteredRecipes = this.filterRecipes(this.searchRecipe(data, searchInput), filter)

    return (
      <div className="App">
        <Header data={data} />
        <Search onSearchInputChange={this.onSearchInputChange} />
        <Filter filter={filter} onFilterChange={this.onFilterChange} />
        <RecipeList
          data={filteredRecipes}
          deleteRecipe={this.deleteRecipe}
          addToFavourite={this.addToFavourite} />
        <RecipeAddForm addNewRecipe={this.addNewRecipe} />
      </div>
    )
  }
}

export default App
