import React from 'react';
import App from '../App';
// import Login from '../pages/Login';
import renderWithRouter from '../services/renderWithRouter';

// beforeEach(() => {
//   renderWithRouter(<Login />);
// });

describe('Criação de elementos na tela', () => {
  const { history } = renderWithRouter(<App />);
  console.log(history);
});
