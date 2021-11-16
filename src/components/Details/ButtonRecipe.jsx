import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

export default function ButtonRecipe({ testBtn }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [text, setText] = React.useState('Iniciar');
  const { allCheck } = useSelector((state) => state.allChecked);
  const { pathname } = window.location;
  useEffect(() => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const keyName = pathname.includes('comidas') ? 'meals' : 'coocktails';
    const ingredientsSaved = inProgressRecipes[keyName][pathname.split('/')[2]];
    if (ingredientsSaved) {
      setText('Continuar');
    }
    setIsOpen(false);
  }, [pathname]);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  if (isOpen && allCheck) return <Redirect to="/receitas-feitas" />;
  if (isOpen) return <Redirect to={ `${pathname}/in-progress` } />;
  if (pathname.includes('in-progress')) {
    return (
      <div>
        <button
          type="button"
          disabled={ !allCheck }
          data-testid={ `${testBtn}-recipe-btn` }
          className="fixed-bottom"
          onClick={ handleClick }
        >
          {`${text} Receita`}
        </button>
      </div>
    );
  }
  return (
    <div>
      <button
        type="button"
        data-testid={ `${testBtn}-recipe-btn` }
        className="fixed-bottom"
        onClick={ handleClick }
      >
        {`${text} Receita`}
      </button>
    </div>
  );
}

ButtonRecipe.propTypes = {
  testBtn: PropTypes.string,
};

ButtonRecipe.defaultProps = {
  testBtn: 'start',
};
