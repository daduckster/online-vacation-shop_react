import React from 'react';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import styles from './BasketItem.module.scss';
import { ActivityPlate } from '../../../types/activities';

interface PropTypes {
  activity: ActivityPlate
}

function BasketItem({ activity }:PropTypes) {
  return (
    <div className={styles.basketItemContainer}>
      <button type="button" aria-label="delete item" className={styles.deleteBtn}>
        <AiOutlineMinusCircle className={styles.deleteIcon} />
      </button>
      <p className={styles.itemName}>{activity.name}</p>
      <div className={styles.priceContainer}>
        <p>{activity.price}</p>
      </div>
    </div>
  );
}

export default BasketItem;
