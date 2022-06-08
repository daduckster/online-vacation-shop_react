import React from 'react';
import inhStylesDurationHome from '../../homePage/durationHome/DurationHome.module.scss';
import BasketItem from './BasketItem';
import styles from './YourBasket.module.scss';
import inhStylesHeroHome from '../../homePage/heroHome/HeroHome.module.scss';
import { useAppSelector } from '../../../store/hooks/hooks';
import DurationBasketItem from './DurationBasketItem';
import { calculateBasicTripPrice } from './yourBasketHelper';

function YourBasket() {
  const activitiesStorage = useAppSelector((state) => state.chosenActivities.value);
  const duration = useAppSelector((state) => state.duration.value);
  function calculateTotalPrice() {
    const basicTripPrice = calculateBasicTripPrice(duration);
    const activitiesSum = activitiesStorage.reduce((total, activity) => total + activity.price, 0);
    return basicTripPrice + activitiesSum;
  }

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
            <DurationBasketItem />
            <p className={styles.extraOptions}>EXTRA TRIP OPTIONS:</p>
            {activitiesStorage.length !== 0 && (
              activitiesStorage.map((activity) => (
                <BasketItem key={activity.name} activity={activity} />
              ))
            )}
            {activitiesStorage.length === 0 && (
              <p className={styles.emptyBasket}>You have no Extra Options chosen</p>
            )}
          </div>
        </div>

        <div className={styles.totalContainer}>
          <header className={styles.totalHeader}>
            TOTAL:
            <span className={styles.totalHeaderSpan}>
              {calculateTotalPrice()}
              chf
            </span>
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
