import React from 'react';
import Header from '../components/Header';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function FavoriteRecipes() {
  const [favorite] = React.useState(false);
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return (
    <div>
      <Header searchRender={ false } title="Receitas Favoritas" />
      <div>
        { favorites.map((item, index) => (
          <div
            key={ index }
            className="w-75"
            // data-testid={ `${index}-favorite-card` }
          >
            <img src={ item.image } alt={ item.id } />
            <p>{item.category}</p>
            <button
              type="button"
              className="bg-transparent border-0"
              data-testid="favorite-btn"
              // onClick={ handleClickFavorite }
              src={ favorite ? 'blackHeartIcon' : 'whiteHeartIcon' }

            >
              <img
                src={ favorite ? blackHeartIcon : whiteHeartIcon }
                alt="favorite icon"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
