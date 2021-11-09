import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

function MainCards() {
  const data = useSelector((state) => state.data.data);
  const MAX_SHOW_RECIPES = 12;

  if (!data) return <p>loading</p>;

  const value = Object.values(data)[0];
  const path = window.location.pathname.split('/')[1];
  let ref = null;

  console.log(data, value);

  if (path === 'comidas') {
    ref = { strTitle: 'strMeal', strThumb: 'strMealThumb', strId: 'idMeal' };
  }
  if (path === 'bebidas') {
    ref = { strTitle: 'strDrink', strThumb: 'strDrinkThumb', strId: 'idDrink' };
  }

  if (!value) {
    return global
      .alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }

  return (
    value.length === 1
      ? <Redirect push to={ `/${path}/${value[0][ref.strId]}` } />
      : (
        <CardGroup>
          { value.map((recipe, index) => {
            if (index >= MAX_SHOW_RECIPES) return null;
            return (
              <div data-testid={ `${index}-recipe-card` } key={ recipe[ref.strId] }>
                <Card style={ { width: '18rem' } } data-testid={ `${index}-recipe-card` }>
                  <Card.Img
                    variant="top"
                    src={ recipe[ref.strThumb] }
                    data-testid={ `${index}-card-img` }
                  />
                  <Card.Body>
                    <Card.Title
                      data-testid={ `${index}-card-name` }
                    >
                      { recipe[ref.strTitle] }
                    </Card.Title>
                    <Button variant="primary">Show Recipe</Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </CardGroup>
      )
  );
}

export default MainCards;
