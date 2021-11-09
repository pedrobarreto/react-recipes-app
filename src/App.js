import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import MainMails from './pages/MainMails';
import MainDrinks from './pages/MainDrinks';

function App() {
  return (
    <div className="meals">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/comidas" component={ MainMails } />
          <Route exact path="/bebidas" component={ MainDrinks } />
          <Route exact path="/perfil" component={ Profile } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
