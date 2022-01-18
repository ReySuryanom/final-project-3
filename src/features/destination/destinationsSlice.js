import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hotels: [],
  fav_hotels: [],
};

export const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    setHotels: (state, action) => {
      console.log(action);
      state.hotels = action.payload;
    },
    addFavoriteHotels: (state, action) => {
      state.fav_hotels = action.payload;
    },
  },
});

export const { setHotels, addFavoriteHotels } = hotelSlice.actions;
export default hotelSlice.reducer;
