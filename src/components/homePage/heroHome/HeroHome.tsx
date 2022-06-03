import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './HeroHome.module.scss';

function HeroHome() {
  return (
    <section className={styles.heroHomeContainer}>
      <header className={styles.headerContainer}>
        <h2 className={styles.h2Hero}>Dream Trip?</h2>
        <h1 className={styles.h1Hero}>Make it Yourself!</h1>
        <Link smooth to="#duration" className={styles.startBtn}>START</Link>
      </header>
      <img src="./assets/images/house.png" alt="house on the beach" className={styles.houseImg} />
    </section>
  );
}

export default HeroHome;
