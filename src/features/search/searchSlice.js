import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    userLogin: (state) => {
      state.isUserLoggedIn = true;
    },
    userLogout: (state) => {
      state.isUserLoggedIn = false;
    },
  },
});

export const { userLogin, userLogout } = searchSlice.actions;
export default searchSlice.reducer;
