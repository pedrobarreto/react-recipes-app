import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router';

export default function ButtonRecipe({ testBtn, text }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { pathname } = window.location;

  if (isOpen) return <Redirect to={ `${pathname}/in-progress` } />;
  return (
    <div>
      <button
        type="button"
        data-testid={ `${testBtn}-recipe-btn` }
        className="fixed-bottom"
        onClick={ () => setIsOpen(!isOpen) }
      >
        {`${text} Receita`}
      </button>
    </div>
  );
}

ButtonRecipe.propTypes = {
  testBtn: PropTypes.string,
  text: PropTypes.string,
};

ButtonRecipe.defaultProps = {
  text: 'Iniciar',
  testBtn: 'start',
};
