import { configureStore } from '@reduxjs/toolkit';
import durationReducer from './slices/durationSlice';
import navReducer from './slices/navSlice';

export const store = configureStore({
  reducer: {
    duration: durationReducer,
    nav: navReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
