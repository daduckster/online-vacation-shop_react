import React, { ReactNode } from 'react';
import { useAppDispatch } from '../../store/hooks/hooks';
import { updateActivitiesFromLocalStorage } from '../../store/slices/activitiesSlice';
import { updateChosenActivitiesFromLocalStorage } from '../../store/slices/chosenActivitiesSlice';
import { updateDurationFromLocalStorage } from '../../store/slices/durationSlice';

interface PropTypes {
  children: ReactNode
}

function LocalStorageWrapper({ children }: PropTypes) {
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

  // eslint-disable-next-line no-console
  console.log('hi');
  return (
    <div>
      { children }
    </div>
  );
}

export default LocalStorageWrapper;
