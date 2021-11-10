import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HeaderDetails from '../components/Details/HeaderDetails';
import Instructions from '../components/Details/Instructions';
import fetchDetails from '../services/fetchDetails';
import { changeDetail } from '../store/detailSlice';

export default function RecipeDetails(props) {
  const [isFetching, setIsFetching] = React.useState(false);

  const pathname = window.location.pathname.split('/')[1];
  const { id } = props.match.params;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchDetails(id, pathname);
      dispatch(changeDetail(response));
      setIsFetching(true);
    };
    fetchData();
  }, []);

  if (!isFetching) return <div>Loading...</div>;
  return (
    <div>
      <HeaderDetails />
      <Instructions />
    </div>
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
