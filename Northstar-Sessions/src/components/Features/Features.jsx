import React from 'react';
import copy from '../../page-copy.json';
import styles from './Features.module.css';

export default function Features() {
  return (
    <section className={styles.features} id="features" aria-labelledby="features-title">
      <h2 id="features-title">{copy.features_heading}</h2>
      <ol className={styles.grid} aria-labelledby="features-title">
        {copy.features.map(({ title, body }, index) => (
          <li className={styles.card} key={title}>
            <span className={styles.number} aria-hidden="true">{`0${index + 1}`}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
