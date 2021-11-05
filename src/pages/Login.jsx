import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { changeUser } from '../store/userLogin';

export default function Login() {
  const [localState, setLocalState] = useState({
    email: '',
    password: '',
  });
  const { isLogged } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLocalState({
      ...localState,
      [name]: value,
    });
  };
  const handleClick = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    const user = {
      email: localState.email,
    };
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(changeUser(localState));
  };
  const verify = () => {
    const { email, password } = localState;
    const NUMBER_MIN_PASSWORD = 6;
    const re = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    if (re.test(email) && password.length > NUMBER_MIN_PASSWORD) {
      return false;
    }
    return true;
  };

  if (isLogged) return <Redirect to="/comidas" />;
  return (
    <div>
      <div>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            value={ localState.email }
            onChange={ handleChange }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            value={ localState.password }
            onChange={ handleChange }
            data-testid="password-input"
          />
        </label>
        <div>
          <button
            type="button"
            onClick={ handleClick }
            data-testid="login-submit-btn"
            disabled={ verify() }
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
