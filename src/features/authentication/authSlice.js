import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isUserLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'authentication',
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

export const { userLogin, userLogout } = authSlice.actions;
export default authSlice.reducer;
