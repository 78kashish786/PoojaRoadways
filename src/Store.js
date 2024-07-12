import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './Slice/LoadingSlice';

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
  },
});