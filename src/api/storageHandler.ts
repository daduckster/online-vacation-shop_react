import { ActivityPlate } from '../types/activities';

export function updateLocalStorageActivities(activities: ActivityPlate[]) {
  localStorage.setItem('activities', JSON.stringify([...activities]));
}

export function updateLocalStorageChosenActivities(chosenActivities: ActivityPlate[]) {
  localStorage.setItem('chosenActivities', JSON.stringify([...chosenActivities]));
}

export function updateLocalStorageDuration(duration: number) {
  localStorage.setItem('duration', JSON.stringify(duration));
}
