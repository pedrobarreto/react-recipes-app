import { fireEvent, screen } from '@testing-library/dom';
import React from 'react';
import App from '../App';
// import Login from '../pages/Login';
import renderWithRouter from '../services/renderWithRouter';

// beforeEach(() => {
//   renderWithRouter(<Login />);
// });

describe('Criação de elementos na tela', () => {
  test(('Verifica existencia dos inputs e botão'), () => {
    const { history } = renderWithRouter(<App />);
    const { location: { pathname } } = history;
    const inputEmail = screen.getByLabelText(/email/i);
    const inputPassword = screen.getByLabelText(/password/i);
    const buttonLogin = screen.getByRole('button', {
      name: /entrar/i,
    });
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(buttonLogin).toBeInTheDocument();
    expect(pathname).toBe('/');
  });
  test('Botão inicia Desabilitado', () => {
    renderWithRouter(<App />);
    const { disabled } = screen.getByRole('button', {
      name: /entrar/i,
    });
    expect(disabled).toBe(true);
  });
});

describe('Inserção de valores nos inputs para habilitar botão', () => {
  beforeEach(() => renderWithRouter(<App />));
  test(('É possível inserir valores nos inputs'), () => {
    const inputEmail = screen.getByLabelText(/email/i);
    const inputPassword = screen.getByLabelText(/password/i);
    const { disabled } = screen.getByRole('button', {
      name: /entrar/i,
    });
    fireEvent.change(inputEmail, { target: { value: 'teste' } });
    fireEvent.change(inputPassword, { target: { value: '1234' } });
    expect(inputEmail.value).toBe('teste');
    expect(inputPassword.value).toBe('1234');
    expect(disabled).toBe(true);
  });
  test(('Com valores corretos o botão é habilitado'), () => {
    const inputEmail = screen.getByLabelText(/email/i);
    const inputPassword = screen.getByLabelText(/password/i);
    const buttonLogin = screen.getByRole('button', {
      name: /entrar/i,
    });
    fireEvent.change(inputEmail, { target: { value: 'teste@email.com' } });
    fireEvent.change(inputPassword, { target: { value: '1234567' } });
    expect(buttonLogin.disabled).toBe(false);
  });
});
