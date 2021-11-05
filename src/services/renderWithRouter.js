import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userLogin from '../store/userLogin';

const renderWithRouter = (
  component,
  { initialState = userLogin, store = configureStore({
    reducer: {
      user: initialState,
    },
  }) } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store,
});
export default renderWithRouter;
