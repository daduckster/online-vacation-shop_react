import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import BasketPage from './pages/BasketPage';
import { useAppDispatch } from './store/hooks/hooks';
import { updateActivitiesFromLocalStorage } from './store/slices/activitiesSlice';
import { updateChosenActivitiesFromLocalStorage } from './store/slices/chosenActivitiesSlice';
import { updateDurationFromLocalStorage } from './store/slices/durationSlice';

function RouteSwitch() {
  const dispatch = useAppDispatch();
  const localStorageActivities = localStorage.getItem('activities');
  const localStorageChosenActivities = localStorage.getItem('chosenActivities');
  const localStorageDuration = localStorage.getItem('duration');

  if (localStorageActivities) {
    const res = JSON.parse(localStorageActivities);
    dispatch(updateActivitiesFromLocalStorage(res));
  }

  if (localStorageChosenActivities) {
    const res = JSON.parse(localStorageChosenActivities);
    dispatch(updateChosenActivitiesFromLocalStorage(res));
  }

  if (localStorageDuration) {
    const res = JSON.parse(localStorageDuration);
    dispatch(updateDurationFromLocalStorage(res));
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
