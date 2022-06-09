import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActivityPlate } from '../../types/activities';
import { updateLocalStorageChosenActivities } from '../../api/storageHandler';

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
      updateLocalStorageChosenActivities(state.value);
    },
    removeActivity: (state, action: PayloadAction<ActivityPlate>) => {
      state.value = state.value
        .filter((activityPlate) => activityPlate.name !== action.payload.name);
      updateLocalStorageChosenActivities(state.value);
    },
    updateChosenActivitiesFromLocalStorage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {
  addActivity,
  removeActivity,
  updateChosenActivitiesFromLocalStorage,
} = ChosenActivitiesSlice.actions;
export default ChosenActivitiesSlice.reducer;
