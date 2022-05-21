import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiRightArrowAlt } from 'react-icons/bi';
import inhStyles from '../homePage/navbarHome/NavbarHome.module.scss';
import styles from './Navbar.module.scss';

function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.btnContainer}>
        <button type="button" className={inhStyles.basketLink}>
          {' '}
          <AiOutlineShoppingCart className={inhStyles.cartIcn} />
          {' '}
          0
        </button>
      </div>
      <div className={styles.linksContainer}>
        <button type="button" className={inhStyles.link}>Home</button>
        <BiRightArrowAlt className={styles.arrowIcon} />
        <button type="button" className={inhStyles.link}>Trip Options</button>
      </div>
    </nav>
  );
}

export default Navbar;
