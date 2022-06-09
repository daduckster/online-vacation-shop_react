import React from 'react';
import styles from './Activity.module.scss';
import { ActivityPlate } from '../../../types/activities';
import { useAppDispatch } from '../../../store/hooks/hooks';
import { addActivity } from '../../../store/slices/chosenActivitiesSlice';
import { toggleIsClicked } from '../../../store/slices/activitiesSlice';

interface PropTypes {
  activity: ActivityPlate
}

function Activity({ activity }: PropTypes) {
  const dispatch = useAppDispatch();
  return (
    <section className={styles.activityContainer}>
      <figure className={styles.imgContainer}>
        <img src={activity.src} alt={activity.alt} className={styles.img} />
      </figure>

      <header className={styles.activityHeader}>{activity.name}</header>

      <p className={styles.activityDescription}>{activity.description}</p>

      {!activity.isClicked && (
        <button
          type="button"
          onClick={() => {
            dispatch(addActivity(activity));
            dispatch(toggleIsClicked(activity));
          }}
          className={styles.activityBtn}
        >
          +Add for
          {' '}
          {activity.price}
          {activity.currency}
        </button>
      )}
      {activity.isClicked && (
        <p className={styles.activityActive}>Added to Your Basket</p>
      )}

    </section>
  );
}

export default Activity;
