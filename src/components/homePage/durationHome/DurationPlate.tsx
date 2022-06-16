import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './DurationPlate.module.scss';
import { useAppDispatch } from '../../../store/hooks/hooks';
import { setDaysToChosenAmount } from '../../../store/slices/durationSlice';

interface PropTypes {
  data: { days: number, price: number }
}

function DurationPlate({ data }:PropTypes) {
  const dispatch = useAppDispatch();

  return (
    <section className={styles.durationPlateContainer}>
      <h4 className={styles.numOfDays}>
        {data.days}
        <span className={styles.daysSpan}>DAYS</span>
      </h4>
      <p className={styles.explanationText}>
        Basic Trip with no Extra Options* for
        {` ${data.price}`}
        CHF
      </p>
      <Link to="/shop#" className={styles.chooseBtn} onClick={() => dispatch(setDaysToChosenAmount(data.days))}>CHOOSE</Link>
    </section>
  );
}

export default DurationPlate;
