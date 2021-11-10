import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import fetchApi from '../../services/fetchApi';

export default function Recomendations() {
  const { detail } = useSelector((state) => state);
  const [isFetching, setIsFetching] = React.useState(false);
  const [recomendations, setRecomendations] = React.useState([]);
  const key = Object.keys(detail)[0];
  const recipe = detail[key][0];
  const { strYoutube } = recipe;
  const idYoutube = strYoutube ? strYoutube.split('v=')[1] : null;
  const path = window.location.pathname.split('/')[1];
  let strTitle = null;
  let strThumb = null;
  if (path === 'comidas') {
    strTitle = 'strMeal';
    strThumb = 'strMealThumb';
  }
  if (path === 'bebidas') {
    strTitle = 'strDrink';
    strThumb = 'strDrinkThumb';
  }
  const toApi = {
    inputRadio: 'name',
    search: recipe[strTitle].replace(/\s/g, '_'),
  };
  console.log(toApi);
  const pathname = `/${path}`;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchApi(toApi, pathname);
      setRecomendations(response[key]);
      setIsFetching(true);
    };
    fetchData();
  }, []);
  if (!isFetching) return <div>Loading...</div>;
  return (
    <div>
      { strYoutube && (
        <div>
          <h1>Vídeo</h1>
          <iframe
            src={ `https://www.youtube.com/embed/${idYoutube}` }
            title="video"
            frameBorder="0"
            allowFullScreen
            data-testid="video"
          />
        </div>
      )}
      { recomendations.map((item, index) => {
        const { idMeal } = item;
        const MAX_CARDS = 3;
        if (index > MAX_CARDS) return null;
        return (
          <div key={ idMeal } data-testid={ `${index}-recomendation-card` }>
            <img src={ strThumb } alt={ strTitle } />
            <h2>{strTitle}</h2>
          </div>
        );
      })}
    </div>
  );
}
