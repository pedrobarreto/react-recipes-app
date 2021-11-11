import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

export default function HeaderDetails() {
  const [favorite, setFavorite] = React.useState(false);
  const [clipboard, setClipboard] = React.useState(false);
  const { detail } = useSelector((state) => state);
  const key = Object.keys(detail)[0];
  const recipe = detail[key][0];
  const path = window.location.pathname.split('/')[1];
  let ref = null;
  let localStorageObj = null;

  useEffect(() => {
    const isFavorite = JSON.parse(localStorage.getItem('favoriteRecipes'))
      .some((item) => item.id === recipe.idMeal || item.id === recipe.idDrink);
    setFavorite(isFavorite);
  }, [recipe]);
  if (path === 'comidas') {
    ref = { strTitle: 'strMeal', strThumb: 'strMealThumb', strCateg: 'strCategory' };

    localStorageObj = { id: recipe.idMeal,
      type: 'comida',
      area: recipe.strArea,
      category: recipe.strCategory,
      alcoholicOrNot: '',
      name: recipe.strMeal,
      image: recipe.strMealThumb };
  }
  if (path === 'bebidas') {
    ref = { strTitle: 'strDrink', strThumb: 'strDrinkThumb', strCateg: 'strAlcoholic' };
    localStorageObj = { id: recipe.idDrink,
      type: 'bebida',
      area: '',
      category: recipe.strCategory,
      alcoholicOrNot: recipe.strAlcoholic,
      name: recipe.strDrink,
      image: recipe.strDrinkThumb };
  }
  const handleClickFavorite = () => {
    setFavorite(!favorite);
    if (!favorite) {
      const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const allFavorites = [...favoriteRecipes, localStorageObj];
      localStorage.setItem('favoriteRecipes', JSON.stringify(allFavorites));
    } else {
      const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
      const allFavorites = favoriteRecipes.filter(
        (item) => item.id !== localStorageObj.id,
      );
      localStorage.setItem('favoriteRecipes', JSON.stringify(allFavorites));
    }
  };
  return (
    <section>
      <div>
        <img
          src={ recipe[ref.strThumb] }
          alt="test"
          data-testid="recipe-photo"
          className="w-50"
        />
      </div>
      <div className="d-flex">
        <div>
          <h2 data-testid="recipe-title">{ recipe[ref.strTitle] }</h2>
          <h3 data-testid="recipe-category">{ recipe[ref.strCateg] }</h3>
        </div>
        <div>
          <button
            type="button"
            className="bg-transparent border-0"
            id="liveToastBtn"
            // https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard - copy to clipboard
            onClick={ () => {
              navigator.clipboard.writeText(`http://localhost:3000${window.location.pathname}`);
              setClipboard(true);
            } }
          >
            <img
              src={ shareIcon }
              data-testid="share-btn"
              alt="share icon"
            />
          </button>
          <button
            type="button"
            className="bg-transparent border-0"
            data-testid="favorite-btn"
            onClick={ handleClickFavorite }
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
      {/* <div className="position-fixed bottom-0 end-0 p-3" style={ { zIndex: 122 } }>
        <div
          id="liveToast"
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            />
          </div>
          <div className="toast-body">
            Link copiado!
            { console.log('teste') }
          </div>
        </div>
      </div> */}
    </section>
  );
}
