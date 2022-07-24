import { configureStore } from '@reduxjs/toolkit';
import billSlice from './slices/bill';

const store = configureStore({
  reducer: billSlice.reducer,
});

export { store };
