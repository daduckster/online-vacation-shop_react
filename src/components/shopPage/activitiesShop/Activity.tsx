import React from 'react';
import styles from './Activity.module.scss';

function Activity() {
  return (
    <section className={styles.activityContainer}>
      <figure className={styles.imgContainer}>
        <img src="./assets/images/house.png" alt="house on the beach" className={styles.img} />
      </figure>

      <header className={styles.activityHeader}>PARACHUTING</header>

      <p className={styles.activityDescription}>
        Quam justo, pretium donec risus quisque habitasse a eu sed. Viverra maecenas odio dui
        interdum ullamcorper quis ullamcorper rhoncus.
        {' '}
      </p>

      <button type="button" className={styles.activityBtn}>+ Add for 70chf</button>
    </section>
  );
}

export default Activity;
