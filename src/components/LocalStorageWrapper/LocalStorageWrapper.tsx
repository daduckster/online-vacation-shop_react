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
  dispatch(updateActivitiesFromLocalStorage(localStorageActivities));
  dispatch(updateChosenActivitiesFromLocalStorage(localStorageChosenActivities));
  dispatch(updateDurationFromLocalStorage(localStorageDuration));

  // eslint-disable-next-line no-console
  console.log('hi');
  return (
    <div>
      { children }
    </div>
  );
}

export default LocalStorageWrapper;
