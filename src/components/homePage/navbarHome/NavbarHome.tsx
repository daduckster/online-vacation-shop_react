import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from './NavbarHome.module.scss';
import { useAppSelector } from '../../../store/hooks/hooks';

function NavbarHome() {
  const activitiesInBasket = useAppSelector((state) => state.chosenActivities.value);
  return (
    <nav className={styles.navContainer}>
      <Link to="/home" className={styles.link}>Home</Link>
      <Link to="/shop" className={styles.link}>Trip Options</Link>
      <Link to="/basket" className={styles.basketLink}>
        <AiOutlineShoppingCart className={styles.cartIcn} />
        {activitiesInBasket.length}
      </Link>
    </nav>
  );
}

export default NavbarHome;
