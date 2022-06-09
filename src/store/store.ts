import { configureStore } from '@reduxjs/toolkit';
import durationReducer from './slices/durationSlice';
import chosenActivitiesReducer from './slices/chosenActivitiesSlice';
import activitiesReducer from './slices/activitiesSlice';

export const store = configureStore({
  reducer: {
    duration: durationReducer,
    chosenActivities: chosenActivitiesReducer,
    activities: activitiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
