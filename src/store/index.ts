import { configureStore } from '@reduxjs/toolkit';
import billReducer from './slices/bill';

const store = configureStore({
  reducer: {
    bills: billReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
