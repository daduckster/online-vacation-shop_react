import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiRightArrowAlt } from 'react-icons/bi';
import { HashLink as Link } from 'react-router-hash-link';
import inhStyles from '../../homePage/navbarHome/NavbarHome.module.scss';
import styles from '../../shared/Navbar.module.scss';

function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.btnContainer}>
        <Link to="/basket" className={inhStyles.basketLink}>
          <AiOutlineShoppingCart className={styles.cartIcn} />
          0
        </Link>
      </div>
      <div className={styles.linksContainer}>
        <Link to="/home" className={inhStyles.link}>Home</Link>
        <BiRightArrowAlt className={styles.arrowIcon} />
        <Link to="/shop" className={inhStyles.link}>Trip Options</Link>
        <BiRightArrowAlt className={styles.arrowIcon} />
        <Link to="/basket" className={inhStyles.link}>Basket</Link>
      </div>
    </nav>
  );
}

export default Navbar;
