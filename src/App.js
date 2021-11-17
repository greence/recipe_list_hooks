import './App.css'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Filter from './components/Filter/Filter'
import RecipeAddForm from './components/RecipeAddForm/RecipeAddForm'
import RecipeList from './components/RecipeList/RecipeList'

function App() {

  const data = [
    {
      title: 'Французские круассаны',
      ingridients: ['молоко', 'вода', 'масло сливочное', 'мука', 'соль', ' сахар', 'дрожжи сухие', 'яйца'],
      time: '45 мин',
      img: '',
      label: '',
      favorite: false,
    },
    {
      title: 'Маффины',
      ingridients: ['куриные яйца', 'сахар', 'сливочное масло', 'растительное масло', 'разрыхлитель', 'мука', 'ванильный сахар', 'джем', 'куриные яйца', 'сахар', 'сливочное масло', 'растительное масло', 'разрыхлитель', 'мука', 'ванильный сахар', 'джем', 'куриные яйца', 'сахар', 'сливочное масло', 'растительное масло', 'разрыхлитель', 'мука', 'ванильный сахар', 'джем'],
      time: '60 мин',
      img: '',
      label: '',
      favorite: false,
    },
    {
      title: 'Чизкейк Брауни',
      ingridients: ['темный шоколад', 'сливочное масло', 'яйцо', 'сахар', 'мука', 'сливочный сыр', 'сливки 10%'],
      time: '50 мин',
      img: '',
      label: '',
      favorite: false,
    }
  ]

  return (
    <div className="App">
      <Header />
      <Search />
      <Filter />
      <RecipeList data={data} />
      <RecipeAddForm />
    </div>
  )
}

export default App
