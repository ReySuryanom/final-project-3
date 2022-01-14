import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authentication';
import hotelsReducer from '../features/destination';
import searchReducer from '../features/search';

export default configureStore({
  reducer: {
    hotel: hotelsReducer,
    auth: authReducer,
    search: searchReducer,
  },
});
