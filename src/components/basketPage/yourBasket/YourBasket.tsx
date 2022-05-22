import React from 'react';
import inhStylesDurationHome from '../../homePage/durationHome/DurationHome.module.scss';
import BasketItem from './BasketItem';
import styles from './YourBasket.module.scss';
import inhStylesHeroHome from '../../homePage/heroHome/HeroHome.module.scss';

function YourBasket() {
  return (
    <section className={styles.yourBasketContainer}>
      <header className={inhStylesDurationHome.header}>
        <h2 className={inhStylesDurationHome.stepNumber}>STEP 3:</h2>
        <h3 className={inhStylesDurationHome.stepName}>CONFIRM YOUR TRIP</h3>
      </header>

      <div className={styles.wrapper}>
        <header className={styles.basketHeader}>YOUR BASKET</header>
        <div className={styles.basketSection}>

          <div className={styles.basket}>
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />
          </div>
        </div>

        <div className={styles.totalContainer}>
          <header className={styles.totalHeader}>
            TOTAL:
            <span className={styles.totalHeaderSpan}>239chf</span>
          </header>
          <p className={styles.totalExplanation}>
            After you press “CONFIRM TRIP” button our specialist is going to contact you in
            shortest terms to confirm details.
          </p>
          <div className={styles.btnContainer}>
            <button type="button" className={inhStylesHeroHome.startBtn}>CONFIRM TRIP</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default YourBasket;
