import { configureStore } from '@reduxjs/toolkit';
import hotelReducer from '../features/destination/destinationsSlice';

export default configureStore({
  reducer: {
    hotel: hotelReducer,
  },
});
