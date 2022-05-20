import React from 'react';
import styles from './DurationPlate.module.scss';

function DurationPlate() {
  return (
    <section className={styles.durationPlateContainer}>
      <h4 className={styles.numOfDays}>
        3
        <span className={styles.daysSpan}>DAYS</span>
      </h4>
      <p className={styles.explanationText}>Basic Trip with no Extra Options* for 75chf</p>
      <button type="button" className={styles.chooseBtn}> CHOOSE</button>
    </section>
  );
}

export default DurationPlate;
