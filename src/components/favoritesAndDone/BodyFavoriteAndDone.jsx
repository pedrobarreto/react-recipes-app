import React from 'react';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';

export default function BodyFavoriteAndDone() {
  const [favorite] = React.useState(true);
  const [clipboard, setClipboard] = React.useState(false);
  const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return (
    <div>
      <div>
        { favorites.map((item, index) => {
          const foodOrDrink = item.type === 'comida' ? 'area' : 'alcoholicOrNot';
          return (
            <div
              key={ index }
              className="w-50"
            >
              <img
                src={ item.image }
                alt={ item.id }
                data-testid={ `${index}-horizontal-image` }
              />
              <p data-testid={ `${index}-horizontal-top-text` }>
                {`${item[foodOrDrink]} - ${item.category}`}
              </p>
              <p data-testid={ `${index}-horizontal-name` }>{item.name}</p>
              <p>{}</p>
              <div>
                <button
                  type="button"
                  className="bg-transparent border-0"
                  id="liveToastBtn"
                  data-testid={ `${index}-horizontal-share-btn` }
                  onClick={ () => {
                    navigator.clipboard.writeText(`http://localhost:3000/${item.type}s/${item.id}`);
                    setClipboard(true);
                  } }
                  src={ shareIcon }
                >
                  <img
                    src={ shareIcon }
                    alt="share icon"
                  />
                </button>
                <button
                  type="button"
                  className="bg-transparent border-0"
                  data-testid={ `${index}-horizontal-favorite-btn` }
                  // onClick={ handleClickFavorite }
                  src={ favorite ? 'blackHeartIcon' : 'whiteHeartIcon' }

                >
                  <img
                    src={ favorite ? blackHeartIcon : whiteHeartIcon }
                    alt="favorite icon"
                  />
                </button>
                { clipboard && <p>Link copiado!</p> }
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
