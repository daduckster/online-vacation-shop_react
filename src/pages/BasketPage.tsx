import React from 'react';
import styles from './Pages.module.scss';
import Navbar from '../components/shared/Navbar';
import YourBasket from '../components/basketPage/yourBasket/YourBasket';
import Footer from '../components/shared/Footer';

function BasketPage() {
  return (
    <div className={styles.pages}>
      <Navbar />
      <YourBasket />
      <Footer />
    </div>
  );
}

export default BasketPage;
