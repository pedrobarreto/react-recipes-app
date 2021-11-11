import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Instructions({ stepProgress }) {
  const { detail } = useSelector((state) => state);
  const key = Object.keys(detail)[0];
  const recipe = detail[key][0];
  const { strInstructions } = recipe;
  const ingredients = [];
  const measures = [];
  function addIngredientsAndMeasures() {
    let stop = true;
    for (let i = 1; stop; i += 1) {
      if (recipe[`strIngredient${i}`] === '' || !recipe[`strIngredient${i}`]) {
        stop = false;
      } else {
        ingredients.push(recipe[`strIngredient${i}`]);
        measures.push(recipe[`strMeasure${i}`]);
      }
    }
  }
  addIngredientsAndMeasures();
  return (
    <section>
      <div>
        { ingredients.map((ingredient, index) => (
          <div key={ index } className="d-flex">
            <p data-testid={ `${index}-${stepProgress}` }>
              {`${ingredient} - ${measures[index]}`}
            </p>
          </div>
        ))}
      </div>
      <div>
        <p data-testid="instructions">{ strInstructions }</p>
      </div>
    </section>
  );
}

Instructions.propTypes = {
  stepProgress: PropTypes.string.isRequired,
};
