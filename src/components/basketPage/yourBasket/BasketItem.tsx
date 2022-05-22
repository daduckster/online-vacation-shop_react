import React from 'react';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import styles from './BasketItem.module.scss';

function BasketItem() {
  return (
    <div className={styles.basketItemContainer}>
      <button type="button" aria-label="delete item" className={styles.deleteBtn}>
        <AiOutlineMinusCircle className={styles.deleteIcon} />
      </button>
      <p className={styles.itemName}>Basic Trip for 7 days</p>
      <div className={styles.priceContainer}>
        <p>153chf</p>
      </div>
    </div>
  );
}

export default BasketItem;
