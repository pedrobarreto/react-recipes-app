import React from 'react';
import { Redirect } from 'react-router';

export default function ButtonRecipe() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { pathname } = window.location;

  if (isOpen) return <Redirect to={ `${pathname}/in-progress` } />;
  return (
    <div>
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="fixed-bottom"
        onClick={ () => setIsOpen(!isOpen) }
      >
        Iniciar Receita
      </button>
    </div>
  );
}
