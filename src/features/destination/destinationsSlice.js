import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hotels: [],
};

export const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    setHotels: (state, action) => {
      state.hotels = action.payload;
    },
  },
});

export const { setHotels } = hotelSlice.actions;

export const selectHotels = (state) => state.hotel.hotels;

export default hotelSlice.reducer;
