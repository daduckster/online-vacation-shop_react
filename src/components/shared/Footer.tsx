import React from 'react';
import { MdContentCopy } from 'react-icons/md';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.info}>
        © 2022 by Olya Vlasak -
        {' '}
        <span className={styles.infoSpan}>
          olyavlasak@gmail.com
          <button type="button" className={styles.copyBtn}>
            Copy Email
            <MdContentCopy className={styles.copyIcon} />
          </button>
        </span>
      </p>
      <a target="_blank" rel="noopener noreferrer" href="https://olyavlasak.com/" className={styles.link}>olyavlasak.com</a>
    </div>
  );
}

export default Footer;
