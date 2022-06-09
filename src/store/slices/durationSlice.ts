import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateLocalStorageDuration } from '../../api/storageHandler';

export interface DurationState {
  value: number
}

const initialState: DurationState = {
  value: 3,
};

export const durationSlice = createSlice({
  name: 'duration',
  initialState,
  reducers: {
    setDaysToChosenAmount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
      updateLocalStorageDuration(state.value);
    },
    updateDurationFromLocalStorage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDaysToChosenAmount, updateDurationFromLocalStorage } = durationSlice.actions;
export default durationSlice.reducer;
