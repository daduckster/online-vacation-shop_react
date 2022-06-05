import React from 'react';
import ActivitiesShop from '../components/shopPage/activitiesShop/ActivitiesShop';
import Footer from '../components/shared/Footer';
import styles from './Pages.module.scss';
import NavbarShop from '../components/shopPage/navbarShop/NavbarShop';

function ShopPage() {
  return (
    <div className={styles.pages}>
      <NavbarShop />
      <ActivitiesShop />
      <Footer />
    </div>
  );
}

export default ShopPage;
