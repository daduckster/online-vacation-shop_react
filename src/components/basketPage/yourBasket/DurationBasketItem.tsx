import React from 'react';
import styles from './BasketItem.module.scss';
import { calculateBasicTripPrice } from './yourBasketHelper';
import { useAppSelector } from '../../../store/hooks/hooks';

function DurationBasketItem() {
  const duration = useAppSelector((state) => state.duration.value);
  return (
    <div className={styles.durationItemContainer}>
      <p className={styles.durationName}>
        YOUR BASIC TRIP LENGTH IS
        {' '}
        {duration}
        {' '}
        DAYS (required)
      </p>
      <div className={styles.priceContainer}>
        <p>
          {calculateBasicTripPrice(duration)}
          chf
        </p>
      </div>
    </div>
  );
}

export default DurationBasketItem;
