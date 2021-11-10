import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'detail',
  initialState: {
    detail: undefined,
  },
  reducers: {
    changeDetail(state, { payload }) {
      return { ...state, ...payload };
    },
  },
});

export const { changeDetail } = slice.actions;

export default slice.reducer;
