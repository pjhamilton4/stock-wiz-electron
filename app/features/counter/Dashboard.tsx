import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styles from './Dashboard.css';
import routes from '../../constants/routes.json';

function fetchData() {
  // you might need the next line, depending on your API provider.
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios
    .get('http://dummy.restapiexample.com/api/v1/employees')
    // eslint-disable-next-line promise/always-return
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
}

export default function Dashboard(): JSX.Element {
  fetchData();

  return (
    <div className={styles.container} data-tid="container">
      <Link to={routes.HOME}>TO SPLASHSCREEN</Link>
    </div>
  );
}
