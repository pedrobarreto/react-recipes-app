import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'data',
  initialState: {
    data: undefined,
  },
  reducers: {
    changeData(state, { payload }) {
      return { ...state, data: payload };
    },
  },
});

export const { changeData } = slice.actions;

export default slice.reducer;
