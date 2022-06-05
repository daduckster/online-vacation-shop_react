import React from 'react';
import styles from './Pages.module.scss';
import YourBasket from '../components/basketPage/yourBasket/YourBasket';
import Footer from '../components/shared/Footer';
import NavbarBasket from '../components/basketPage/navbarBasket/NavbarBasket';

function BasketPage() {
  return (
    <div className={styles.pages}>
      <NavbarBasket />
      <YourBasket />
      <Footer />
    </div>
  );
}

export default BasketPage;
