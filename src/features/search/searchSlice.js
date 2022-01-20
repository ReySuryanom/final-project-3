import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  city: null,
  checkIn: null,
  checkOut: null,
  guests: null,
  showSearch: true,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setCheckIn: (state, action) => {
      state.checkIn = action.payload;
    },
    setCheckOut: (state, action) => {
      state.checkOut = action.payload;
    },
    setGuests: (state, action) => {
      state.guests = action.payload;
    },
    toggleSearch: (state) => {
      state.showSearch = !state.showSearch;
    },
  },
});

export const { setCity, setCheckIn, setGuests, setCheckOut, toggleSearch } = searchSlice.actions;
export default searchSlice.reducer;
