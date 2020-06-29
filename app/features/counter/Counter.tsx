import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Counter.css';
import routes from '../../constants/routes.json';

export default function Counter(): JSX.Element {
  return (
    <div className={styles.container} data-tid="container">
      <Link to={routes.HOME}>TO SPLASHSCREEN</Link>
    </div>
  );
}
