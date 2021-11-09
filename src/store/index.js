import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './searchSlice';
import userSlice from './userSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    search: searchSlice,
  },
});
