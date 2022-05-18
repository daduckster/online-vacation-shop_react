import React from 'react';
import styles from './HeroHome.module.scss';

function HeroHome() {
  return (
    <section className={styles.heroHomeContainer}>
      <header className={styles.headerContainer}>
        <h3 className={styles.h3Hero}>Dream Trip?</h3>
        <h1 className={styles.h1Hero}>Make it Yourself!</h1>
        <button type="button" className={styles.startBtn}>START</button>
      </header>
      <img src="./assets/images/house.png" alt="house on the beach" className={styles.houseImg} />
    </section>
  );
}

export default HeroHome;
