import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'search',
  initialState: {
    search: '',
    inputRadio: '',
    isClicked: false,
  },
  reducers: {
    changeSearch(state, { payload: { search, inputRadio } }) {
      return { ...state, isClicked: true, search, inputRadio };
    },
  },
});

export const { changeSearch } = slice.actions;

export default slice.reducer;
