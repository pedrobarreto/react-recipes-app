import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import MainCards from '../components/MainCards';
import fetchApi from '../services/fetchApi';
import { changeData } from '../store/dataSlice';

export default function Main() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);

  useEffect(() => {
    async function fetchData(end, path) {
      const data = await fetchApi(end, path);
      dispatch(changeData(data));
    }
    fetchData(search, window.location.pathname);
  }, [search, dispatch]);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="d-flex flex-wrap">
            <MainCards />
          </div>
        </div>
      </div>
    </div>
  );
}
