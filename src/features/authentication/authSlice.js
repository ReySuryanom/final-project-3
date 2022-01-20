import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isUserLoggedIn: false,
  user: null,

  /* Untuk DEMO */
  // isUserLoggedIn: true,
  // user: {
  //   firstName: 'Admin',
  //   lastName: 'Admin',
  //   gender: 'male',
  //   email: 'admin@gmail.com',
  //   level: 'admin',
  // },
};

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    userLogin: (state) => {
      state.isUserLoggedIn = true;
      state.user = {
        firstName: 'Admin',
        lastName: 'Admin',
        gender: 'male',
        email: 'admin@gmail.com',
        level: 'admin',
      };
    },
    userLogout: (state) => {
      state.isUserLoggedIn = false;
      state.user = null;
    },
  },
});

export const { userLogin, userLogout } = authSlice.actions;
export default authSlice.reducer;
