import React from 'react';
import Header from '../components/Header';
import ButtonsFilter from '../components/favoritesAndDone/ButtonsFilter';
import BodyFavoriteAndDone from '../components/favoritesAndDone/BodyFavoriteAndDone';

export default function FavoriteRecipes() {
  return (
    <div>
      <Header searchRender={ false } title="Receitas Favoritas" />
      <ButtonsFilter />
      <BodyFavoriteAndDone />
    </div>
  );
}
