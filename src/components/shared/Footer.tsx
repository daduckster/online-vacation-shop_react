import React, { useState } from 'react';
import { MdContentCopy } from 'react-icons/md';
import styles from './Footer.module.scss';

function Footer() {
  const [btnIsPressed, setBtnIsPressed] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  function copyEmail() {
    const email = 'olyavlasak@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      setIsCopied(true);
      setBtnIsPressed(true);
    }, () => {
      setIsCopied(false);
      setBtnIsPressed(true);
    });
  }

  return (
    <div className={styles.footerContainer}>
      <p className={styles.info}>
        © 2022 by Olya Vlasak -
        {' '}
        <span className={styles.infoSpan}>
          olyavlasak@gmail.com

          <button type="button" onClick={copyEmail} className={styles.copyBtn}>
            {btnIsPressed && (
              isCopied ? <p>Email Copied</p>
                : <p>Error. Copy Email manually</p>
            )}
            {!btnIsPressed && (
              <p>
                Copy Email
                <MdContentCopy className={styles.copyIcon} />
              </p>
            )}
          </button>
        </span>
      </p>
      <a target="_blank" rel="noopener noreferrer" href="https://olyavlasak.com/" className={styles.link}>olyavlasak.com</a>
    </div>
  );
}

export default Footer;
