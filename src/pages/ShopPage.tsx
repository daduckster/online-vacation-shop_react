import React from 'react';
import ActivitiesShop from '../components/shopPage/activitiesShop/ActivitiesShop';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

function ShopPage() {
  return (
    <div>
      <Navbar />
      <ActivitiesShop />
      <Footer />
    </div>
  );
}

export default ShopPage;
