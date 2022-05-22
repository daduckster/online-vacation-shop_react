import React from 'react';
import NavbarHome from '../components/homePage/navbarHome/NavbarHome';
import HeroHome from '../components/homePage/heroHome/HeroHome';
import QuoteHome from '../components/homePage/quoteHome/QuoteHome';
import DurationHome from '../components/homePage/durationHome/DurationHome';
import Footer from '../components/shared/Footer';
import styles from './Pages.module.scss';

function HomePage() {
  return (
    <div className={styles.pages}>
      <NavbarHome />
      <HeroHome />
      <QuoteHome />
      <DurationHome />
      <Footer />
    </div>
  );
}

export default HomePage;
