import { configureStore } from '@reduxjs/toolkit';
import durationReducer from './slices/durationSlice';

export const store = configureStore({
  reducer: {
    duration: durationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
