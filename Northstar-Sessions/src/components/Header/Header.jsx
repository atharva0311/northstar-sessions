import React from 'react';
import logo from '../../assets/logo-mark.svg';
import copy from '../../page-copy.json';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={`container ${styles.header}`}>
      <div className={styles.brand}>
        <img src={logo} width="40" height="40" alt="" />
        <div>
          <strong>{copy.brand}</strong>
          <p>{copy.byline}</p>
        </div>
      </div>
      <nav aria-label="Primary" className={styles.nav}>
        <a className={styles.features} href="#features">{copy.nav[0]}</a>
        <a className={`primary ${styles.register}`} href="#register">{copy.nav[1]}</a>
      </nav>
    </header>
  );
}
