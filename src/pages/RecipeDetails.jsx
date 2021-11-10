import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import fetchDetails from '../services/fetchDetails';
import { changeDetail } from '../store/detailSlice';

export default function RecipeDetails(props) {
  const pathname = window.location.pathname.split('/')[1];
  const { id } = props.match.params;
  const dispatch = useDispatch();
  const fetchData = async () => {
    const response = await fetchDetails(id, pathname);
    console.log(response);
    dispatch(changeDetail(response));
  };
  fetchData();
  return (
    <div />
  );
}

RecipeDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  props: PropTypes.objectOf(PropTypes.any).isRequired,
};
