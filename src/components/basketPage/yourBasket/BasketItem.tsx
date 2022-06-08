import React from 'react';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import styles from './BasketItem.module.scss';
import { ActivityPlate } from '../../../types/activities';
import { useAppDispatch } from '../../../store/hooks/hooks';
import { removeActivity } from '../../../store/slices/chosenActivitiesSlice';

interface PropTypes {
  activity: ActivityPlate
}

function BasketItem({ activity }:PropTypes) {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.basketItemContainer}>
      <button type="button" onClick={() => dispatch(removeActivity(activity))} aria-label="delete item" className={styles.deleteBtn}>
        <AiOutlineMinusCircle className={styles.deleteIcon} />
      </button>
      <p className={styles.itemName}>{activity.name}</p>
      <div className={styles.priceContainer}>
        <p>
          {activity.price}
          {' '}
          {activity.currency}
        </p>
      </div>
    </div>
  );
}

export default BasketItem;
