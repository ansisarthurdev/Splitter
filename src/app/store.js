import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/billSlice';

export const store = configureStore({
  reducer: {
    app: counterReducer,
  },
});
