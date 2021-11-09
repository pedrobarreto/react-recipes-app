import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import fetchApi from '../toTest/testSupport';

export default function MainDrinks() {
  // Usado apenas para chamar a API e passar no teste
  // const { search = 'e', inputRadio, isClicked } = useSelector((state) => state.search);
  const search = useSelector((state) => state.search);
  if (search) {
    fetchApi(search, window.location.pathname);
  }
  return (
    <div>
      <Header />
    </div>
  );
}
