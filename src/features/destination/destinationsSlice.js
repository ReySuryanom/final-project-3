import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hotels: [],
  favHotels: [],
  bookedHotels: [],
};

export const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    setHotels: (state, action) => {
      state.hotels = action.payload;
    },
    addFavoriteHotels: (state, action) => {
      const appendData = [...state.favHotels, action.payload];
      state.favHotels = appendData;
    },
    addBookedHotels: (state, action) => {
      const appendData = [...state.bookedHotels, action.payload];
      state.bookedHotels = appendData;
    },
  },
});

export const { setHotels, addFavoriteHotels, addBookedHotels } = hotelSlice.actions;
export default hotelSlice.reducer;
