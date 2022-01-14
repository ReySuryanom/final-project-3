import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  city: null,
  date: { checkIn: null, checkOut: null },
  guests: null,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    postSearch: (state, action) => {
      state = action;
    },
  },
});

export const { userLogin } = searchSlice.actions;
export default searchSlice.reducer;
