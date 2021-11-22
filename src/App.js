import { Component } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Filter from './components/Filter/Filter'
import RecipeAddForm from './components/RecipeAddForm/RecipeAddForm'
import RecipeList from './components/RecipeList/RecipeList'

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
          label: '',
          favorite: false,
          id: 456
        },
        {
          title: 'Маффины',
          ingridients: ['куриные яйца', 'сахар', 'сливочное масло', 'растительное масло', 'разрыхлитель', 'мука', 'ванильный сахар', 'джем', 'куриные яйца', 'сахар', 'сливочное масло', 'растительное масло', 'разрыхлитель', 'мука', 'ванильный сахар', 'джем', 'куриные яйца', 'сахар', 'сливочное масло', 'растительное масло', 'разрыхлитель', 'мука', 'ванильный сахар', 'джем'],
          time: '60 мин',
          img: '',
          label: '',
          favorite: false,
          id: 458
        },
        {
          title: 'Чизкейк Брауни',
          ingridients: ['темный шоколад', 'сливочное масло', 'яйцо', 'сахар', 'мука', 'сливочный сыр', 'сливки 10%'],
          time: '50 мин',
          img: '',
          label: '',
          favorite: false,
          id: 569
        }
      ]
    }
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
      time: '',
      img: '',
      label: '',
      favorite: false,
      id: this.generateId()
    }

    let newData = [...this.state.data, newRecipe]
    this.setState({
      data: newData
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Filter />
        <RecipeList data={this.state.data} deleteRecipe={id => this.deleteRecipe(id)} />
        <RecipeAddForm addNewRecipe={this.addNewRecipe} />
      </div>
    )
  }
}

export default App
