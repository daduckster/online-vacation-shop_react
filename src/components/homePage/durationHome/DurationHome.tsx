import React from 'react';
import DurationPlate from './DurationPlate';
import styles from './DurationHome.module.scss';

function DurationHome() {
  return (
    <article id="duration" className={styles.durationContainer}>
      <header className={styles.header}>
        <h2 className={styles.stepNumber}>STEP 1:</h2>
        <h3 className={styles.stepName}>CHOOSE LENGTH OF YOUR TRIP</h3>
      </header>
      <div className={styles.plateWrapper}>
        <DurationPlate />
        <DurationPlate />
        <DurationPlate />
      </div>
      <p className={styles.spoilerPlate}>
        *You can add Extra Options on the next step.
        BasicTrip Option includes only Hotel for the chosen amount of days
      </p>
    </article>
  );
}

export default DurationHome;
