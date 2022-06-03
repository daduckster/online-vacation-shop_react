import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiRightArrowAlt } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import inhStyles from '../homePage/navbarHome/NavbarHome.module.scss';
import styles from './Navbar.module.scss';

function Navbar() {
  const location = useLocation();
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
        <button type="button" className={inhStyles.link}>{location.pathname}</button>
      </div>
    </nav>
  );
}

export default Navbar;
