import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainCards from '../components/MainCards';
import fetchApi from '../services/fetchApi';
import { changeData } from '../store/dataSlice';

export default function Main() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const { pathname } = window.location;

  useEffect(() => {
    async function fetchData(end, path) {
      const data = await fetchApi(end, path);
      dispatch(changeData(data));
    }
    fetchData(search, pathname);
  }, [search, dispatch, pathname]);

  return (
    <div>
      <Header />
      <div className="container">
        <div>
          <div className="d-flex flex-wrap">
            <MainCards />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
