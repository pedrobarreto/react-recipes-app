import { configureStore } from '@reduxjs/toolkit';
import userLogin from './userLogin';

export default configureStore({
  reducer: {
    user: userLogin,
  },
});
