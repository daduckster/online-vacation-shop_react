import React from 'react';
import { BsArrowDownCircle } from 'react-icons/bs';
import styles from './QuoteHome.module.scss';

function QuoteHome() {
  return (
    <section className={styles.quoteContainer}>
      <div className={styles.quoteBox}>
        <p className={styles.quote}>
          Use our vacation constructor to create a journey that fits
          <span className={styles.quoteSpan}>YOU</span>
        </p>
        <BsArrowDownCircle className={styles.arrowIcon} />
      </div>
    </section>
  );
}

export default QuoteHome;
