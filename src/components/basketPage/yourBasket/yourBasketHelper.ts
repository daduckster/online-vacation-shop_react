import { BasicPrice } from '../../../types/activities';

export const basicTripPrices: BasicPrice[] = [
  { days: 3, price: 75 },
  { days: 5, price: 118 },
  { days: 7, price: 153 },
];

export function calculateBasicTripPrice(duration:number): number {
  const desiredItem: BasicPrice = basicTripPrices.filter((item) => item.days === duration)[0];
  return desiredItem.price;
}
