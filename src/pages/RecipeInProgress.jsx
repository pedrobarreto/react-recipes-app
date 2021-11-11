import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ButtonRecipe from '../components/Details/ButtonRecipe';
import HeaderDetails from '../components/Details/HeaderDetails';
import Instructions from '../components/Details/Instructions';
import fetchDetails from '../services/fetchDetails';
import { changeDetail } from '../store/detailSlice';
import './css/recipeDetails.css';

// pair programming Pedro e Murilo
export default function RecipeInProgress(props) {
  const [isFetching, setIsFetching] = React.useState(false);

  const pathname = window.location.pathname.split('/')[1];
  const { match: { params: { id } } } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchDetails(id, pathname);
      if (response) {
        dispatch(changeDetail(response));
        setIsFetching(true);
      }
    };
    if (!localStorage.getItem('favoriteRecipes')) {
      localStorage.favoriteRecipes = JSON.stringify([]);
    }
    fetchData();
  }, [dispatch, id, pathname]);
  if (!isFetching) return <div>Loading...</div>;
  return (
    <div>
      <HeaderDetails />
      <Instructions stepProgress="ingredient-step" progress />
      <ButtonRecipe testBtn="finish" />
    </div>
  );
}

RecipeInProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
