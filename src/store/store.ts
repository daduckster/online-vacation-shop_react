import { configureStore } from '@reduxjs/toolkit';
import durationReducer from './slices/durationSlice';
import chosenActivitiesReducer from './slices/chosenActivitiesSlice';

export const store = configureStore({
  reducer: {
    duration: durationReducer,
    chosenActivities: chosenActivitiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
