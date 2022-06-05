import React from 'react';
import styles from './Activity.module.scss';
import { ActivityPlate } from '../../../types/activities';

interface PropTypes {
  activity: ActivityPlate
}

function Activity({ activity }: PropTypes) {
  return (
    <section className={styles.activityContainer}>
      <figure className={styles.imgContainer}>
        <img src={activity.src} alt={activity.alt} className={styles.img} />
      </figure>

      <header className={styles.activityHeader}>{activity.name}</header>

      <p className={styles.activityDescription}>{activity.description}</p>

      <button type="button" className={styles.activityBtn}>
        +Add for
        {' '}
        {activity.price}
        {activity.currency}
      </button>
    </section>
  );
}

export default Activity;
