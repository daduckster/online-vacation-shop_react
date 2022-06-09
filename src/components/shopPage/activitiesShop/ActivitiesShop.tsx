import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import inhStylesHeroHome from '../../homePage/heroHome/HeroHome.module.scss';
import inhStylesDurationHome from '../../homePage/durationHome/DurationHome.module.scss';
import styles from './ActivitiesShop.module.scss';
import Activity from './Activity';
import { useAppSelector, useAppDispatch } from '../../../store/hooks/hooks';
import { setDaysToChosenAmount } from '../../../store/slices/durationSlice';

function ActivitiesShop() {
  const dispatch = useAppDispatch();
  const duration = useAppSelector((state) => state.duration.value);
  const activities = useAppSelector((state) => state.activities.value);
  const durationOptions = [3, 5, 7];
  return (
    <article className={styles.shopContainer}>
      <header className={inhStylesDurationHome.header}>
        <h2 className={inhStylesDurationHome.stepNumber}>STEP 2:</h2>
        <h3 className={inhStylesDurationHome.stepName}>ADD EXTRA OPTIONS</h3>
      </header>

      <div>
        <label htmlFor="selectDays">
          Days in your Basic Trip:
          {durationOptions.map((option) => {
            if (option === duration) {
              return <button className={styles.chosenDaysBtn} type="button" key={option}>{option}</button>;
            }
            return <button onClick={() => dispatch(setDaysToChosenAmount(option))} className={styles.daysBtn} type="button" key={option}>{option}</button>;
          })}
        </label>
      </div>

      <div className={styles.activityContainer}>
        {activities.map((activity) => <Activity key={activity.name} activity={activity} />)}
      </div>

      <div className={styles.btnContainer}>
        <Link to="/basket#" className={inhStylesHeroHome.startBtn}>CALCULATE FINAL PRICE</Link>
      </div>

    </article>
  );
}

export default ActivitiesShop;
