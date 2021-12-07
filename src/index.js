import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import RecipeService from './services/RecipeService'


// const recipeService = new RecipeService()
// recipeService.getAllRecipes().then(res => console.log(res.hits))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)