import React from 'react';
import DurationPlate from './DurationPlate';
import styles from './DurationHome.module.scss';

function DurationHome() {
  const durationData = [
    { days: 3, price: 75 },
    { days: 5, price: 118 },
    { days: 7, price: 153 },
  ];

  return (
    <article id="duration" className={styles.durationContainer}>
      <header className={styles.header}>
        <h2 className={styles.stepNumber}>STEP 1:</h2>
        <h3 className={styles.stepName}>CHOOSE LENGTH OF YOUR TRIP</h3>
      </header>
      <div className={styles.plateWrapper}>
        {durationData.map((data) => <DurationPlate key={data.days} data={data} />)}
      </div>
      <p className={styles.spoilerPlate}>
        *You can add Extra Options on the next step.
        BasicTrip Option includes only Hotel for the chosen amount of days
      </p>
    </article>
  );
}

export default DurationHome;
