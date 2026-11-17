import React from 'react';
import illustration from '../../assets/hero-planning.webp';
import copy from '../../page-copy.json';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <h1 id="hero-title">{copy.headline}</h1>
        <p className={styles.intro}>{copy.intro}</p>
        <div className={styles.actions}>
          <a className={`primary ${styles.cta}`} href="#register">{copy.cta}</a>
          <a className={styles.secondary} href="#features">{copy.secondary}</a>
        </div>
      </div>
      <img className={styles.image} src={illustration} width="800" height="600" alt="" />
    </section>
  );
}
