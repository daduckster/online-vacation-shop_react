import { createSlice } from '@reduxjs/toolkit';

export interface BasketNavState {
  lastNavPage: string
}

const initialState: BasketNavState = {
  lastNavPage: 'home',
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setLastNavPageToShop: (state) => {
      state.lastNavPage = 'shop';
    },
    setLastNavPageToHome: (state) => {
      state.lastNavPage = 'home';
    },
  },
});

export const { setLastNavPageToShop } = navSlice.actions;
export default navSlice.reducer;
