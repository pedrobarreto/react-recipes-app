import React from 'react';
import { Link } from 'react-router-dom';
import { getRandomDrink } from '../tests/fetchApiRandom';

export default function Explore() {
  return (
    <div>
      <h1>Explorar Bebidas</h1>
      <Link to="/explorar/bebidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes

        </button>
      </Link>
      <Link to="/explorar/bebidas">
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ () => getRandomDrink() }
        >
          Me Surpreenda!

        </button>
      </Link>
    </div>
  );
}
