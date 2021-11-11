import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './dataSlice';
import detailSlice from './detailSlice';
// import { changeDetail } from './detailSlice';
import searchSlice from './searchSlice';
import userSlice from './userSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    search: searchSlice,
    data: dataSlice,
    detail: detailSlice,
  },
});
