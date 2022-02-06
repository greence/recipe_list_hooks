import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header/Header'
// import Search from './components/Search/Search'
import Filter from './components/Filter/Filter'
import RandomRecipe from './components/RandomRecipe/RandomRecipe'
import Page404 from './components/Page404/Page404'

import './App.scss'

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div className="App">
            <Header />
            {/* <Search /> */}
            <RandomRecipe />
            <Filter />
          </div>
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
