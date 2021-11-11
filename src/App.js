import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Explore from './pages/Explore';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoods from './pages/ExploreFoods';
import ExploreFoodsIngredients from './pages/ExploreFoodsIngredients';
import ExploreDrinksIngredients from './pages/ExploreDrinksIngredients';
import Profile from './pages/Profile';
import Main from './pages/Main';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/comidas" component={ Main } />
          <Route exact path="/bebidas" component={ Main } />
          <Route exact path="/explorar" component={ Explore } />
          <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
          <Route exact path="/explorar/comidas" component={ ExploreFoods } />
          <Route
            exact
            path="/explorar/comidas/ingredientes"
            component={ ExploreFoodsIngredients }
          />
          <Route
            exact
            path="/explorar/bebidas/ingredientes"
            component={ ExploreDrinksIngredients }
          />
          <Route exact path="/perfil" component={ Profile } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
