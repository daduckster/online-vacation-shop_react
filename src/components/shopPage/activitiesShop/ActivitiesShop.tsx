import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import inhStylesHeroHome from '../../homePage/heroHome/HeroHome.module.scss';
import inhStylesDurationHome from '../../homePage/durationHome/DurationHome.module.scss';
import styles from './ActivitiesShop.module.scss';
import Activity from './Activity';
import { useAppSelector } from '../../../store/hooks/hooks';
import activities from './activitiesShopHelper';

function ActivitiesShop() {
  const duration = useAppSelector((state) => state.duration.value);
  const durationOptions = [3, 5, 7];
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
            {durationOptions.map((option) => {
              if (option === duration) {
                return <option value={option} selected>{option}</option>;
              }
              return <option value={option}>{option}</option>;
            })}
          </select>
        </label>
      </div>

      <div className={styles.activityContainer}>
        {activities.map((activity) => <Activity key={activity.name} activity={activity} />)}
      </div>

      <div className={styles.btnContainer}>
        <Link to="/basket" className={inhStylesHeroHome.startBtn}>CALCULATE FINAL PRICE</Link>
      </div>

    </article>
  );
}

export default ActivitiesShop;
