import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'search',
  initialState: {
    type: '',
    radio: { search: '', radioType: '' },
    category: { search: '', categoryType: '' },
    ingredients: { search: '', ingredientsType: '' },
  },
  reducers: {
    changeSearch(state, { payload }) {
      return { ...state, ...payload };
    },
  },
});

export const { changeSearch } = slice.actions;

export default slice.reducer;
