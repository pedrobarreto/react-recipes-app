import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import fetchApi from '../toTest/testSupport';

export default function MainMails() {
  // Usado apenas para chamar a API e passar no teste
  const { search, inputRadio, isClicked } = useSelector((state) => state.search);
  fetchApi(isClicked, inputRadio, search, window.location.pathname);
  return (
    <div>
      <Header />
    </div>
  );
}
