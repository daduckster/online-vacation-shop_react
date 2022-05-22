import React from 'react';
import ActivitiesShop from '../components/shopPage/activitiesShop/ActivitiesShop';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import styles from './Pages.module.scss';

function ShopPage() {
  return (
    <div className={styles.pages}>
      <Navbar />
      <ActivitiesShop />
      <Footer />
    </div>
  );
}

export default ShopPage;
