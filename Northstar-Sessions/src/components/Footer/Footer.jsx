import React from 'react';
import copy from '../../page-copy.json';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={`container ${styles.footer}`}>
      <strong>{copy.footer}</strong>
      <p>{copy.footer_note}</p>
    </footer>
  );
}
