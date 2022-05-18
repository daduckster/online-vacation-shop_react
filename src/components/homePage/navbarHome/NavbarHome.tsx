import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from './NavbarHome.module.scss';

function NavbarHome() {
  return (
    <nav className={styles.navContainer}>
      <button type="button" className={styles.link}>Home</button>
      <button type="button" className={styles.link}>Trip Options</button>
      <button type="button" className={styles.basketLink}>
        {' '}
        <AiOutlineShoppingCart />
        {' '}
        0
      </button>

    </nav>
  );
}

export default NavbarHome;
