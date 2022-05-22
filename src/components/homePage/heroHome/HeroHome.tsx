import React from 'react';
import styles from './HeroHome.module.scss';

function HeroHome() {
  return (
    <section className={styles.heroHomeContainer}>
      <header className={styles.headerContainer}>
        <h2 className={styles.h2Hero}>Dream Trip?</h2>
        <h1 className={styles.h1Hero}>Make it Yourself!</h1>
        <a href="#duration" className={styles.startBtn}>START</a>
      </header>
      <img src="./assets/images/house.png" alt="house on the beach" className={styles.houseImg} />
    </section>
  );
}

export default HeroHome;
