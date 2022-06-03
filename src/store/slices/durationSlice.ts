import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    },
  },
});

export const { setDaysToChosenAmount } = durationSlice.actions;
export default durationSlice.reducer;
