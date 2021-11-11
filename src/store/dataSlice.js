import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'data',
  initialState: {
    data: undefined,
    categories: undefined,
  },
  reducers: {
    changeData(state, { payload }) {
      return { ...state, data: payload };
    },
    changeCategories(state, { payload }) {
      return { ...state, categories: payload };
    },
  },
});

export const { changeData, changeCategories } = slice.actions;

export default slice.reducer;
