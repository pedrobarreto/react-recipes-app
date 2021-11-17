import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';

export default function BodyFavoriteAndDone() {
  const [favorite] = React.useState(true);
  const [clipboard, setClipboard] = React.useState(false);
  const { filter } = useSelector((state) => state.filterFav);
  const [favoriteCards, setFavoriteCards] = React.useState([]);
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (filter === 'all') {
      setFavoriteCards(favorites);
    } else {
      const filterFav = favorites.filter((fav) => fav.type === filter);
      setFavoriteCards(filterFav);
    }
  }, [filter]);
  const handleClickFavorite = (itemObj) => {
    const allFavorites = favoriteCards.filter(
      (item) => item.id !== itemObj.id,
    );
    localStorage.setItem('favoriteRecipes', JSON.stringify(allFavorites));
    setFavoriteCards(allFavorites);
  };
  return (
    <div>
      <div>

        { favoriteCards
        && favoriteCards.map((item, index) => {
          const foodOrDrink = item.type === 'comida' ? 'area' : 'alcoholicOrNot';
          return (
            <div
              key={ index }
            >
              <Link to={ `${item.type}s/${item.id}` }>
                <img
                  src={ item.image }
                  alt={ item.id }
                  className="w-25"
                  data-testid={ `${index}-horizontal-image` }
                />
                <p data-testid={ `${index}-horizontal-top-text` }>
                  {`${item[foodOrDrink]} - ${item.category}`}
                </p>
                <p data-testid={ `${index}-horizontal-name` }>{item.name}</p>
              </Link>
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
                  onClick={ () => handleClickFavorite(item) }
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
