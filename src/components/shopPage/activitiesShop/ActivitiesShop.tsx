import React from 'react';
import inhStylesHeroHome from '../../homePage/heroHome/HeroHome.module.scss';
import inhStylesDurationHome from '../../homePage/durationHome/DurationHome.module.scss';
import styles from './ActivitiesShop.module.scss';
import Activity from './Activity';

function ActivitiesShop() {
  return (
    <article className={styles.shopContainer}>
      <header className={inhStylesDurationHome.header}>
        <h2 className={inhStylesDurationHome.stepNumber}>STEP 2:</h2>
        <h3 className={inhStylesDurationHome.stepName}>ADD EXTRA OPTIONS</h3>
      </header>

      <div>
        <label htmlFor="selectDays">
          Amount of days in your Basic Trip:
          <select name="selectDays" id="selectDays" className={styles.daysSelect}>
            <option value="3">3</option>
            <option value="3">5</option>
            <option value="3">7</option>
          </select>
        </label>
      </div>

      <div className={styles.activityContainer}>
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
      </div>

      <div className={styles.btnContainer}>
        <button type="button" className={inhStylesHeroHome.startBtn}>CALCULATE FINAL PRICE</button>
      </div>

    </article>
  );
}

export default ActivitiesShop;
