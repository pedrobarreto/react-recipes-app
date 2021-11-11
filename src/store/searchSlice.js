import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'search',
  initialState: {
    type: '',
    radio: { search: '', isClicked: false, radioType: '' },
    category: { search: '', isClicked: false, categoryType: '' },
  },
  reducers: {
    changeSearch(state, { payload }) {
      return { ...state, ...payload };
    },
  },
});

export const { changeSearch } = slice.actions;

export default slice.reducer;
