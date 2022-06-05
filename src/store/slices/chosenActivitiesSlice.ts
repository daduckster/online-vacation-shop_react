import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActivityPlate } from '../../types/activities';

export interface ChosenActivitiesState {
  value: ActivityPlate[]
}

const initialState: ChosenActivitiesState = {
  value: [],
};

export const ChosenActivitiesSlice = createSlice({
  name: 'chosenActivities',
  initialState,
  reducers: {
    addActivity: (state, action: PayloadAction<ActivityPlate>) => {
      state.value = [...state.value, action.payload];
    },
    removeActivity: (state, action: PayloadAction<ActivityPlate>) => {
      state.value = state.value.filter((activityPlate) => activityPlate !== action.payload);
    },
  },
});

export const { addActivity, removeActivity } = ChosenActivitiesSlice.actions;
export default ChosenActivitiesSlice.reducer;
