import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import fetchApi from '../services/fetchApi';

export default function MainDrinks() {
  // Usado apenas para chamar a API e passar no teste
  // const { search = 'e', inputRadio, isClicked } = useSelector((state) => state.search);
  const search = useSelector((state) => state.search);

  useEffect(() => {
    async function fetchData(end, path) {
      const data = await fetchApi(end, path);
      console.log(data);
    }
    fetchData(search, window.location.pathname);
  }, [search]);

  return (
    <div>
      <Header />
    </div>
  );
}
