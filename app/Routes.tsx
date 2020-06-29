/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import DashboardPage from './containers/DashboardPage';

// Lazily load routes and code split with webpacck
const LazyDashboardPage = React.lazy(() =>
  import(/* webpackChunkName: "DashboardPage" */ './containers/DashboardPage')
);

const dash = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyDashboardPage {...props} />
  </React.Suspense>
);

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.COUNTER} component={DashboardPage} />
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </App>
  );
}
