import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styles from './Dashboard.css';
import routes from '../../constants/routes.json';
import TopWatchedCard from '../../components/StockTwits/TopWatched';

export default class Dashboard extends React.Component {
  constructor(props: Readonly<{}>){
    super(props);

    this.state = {topWatched: []};
  };

  componentDidMount(){
    this.fetchData();
  }

  fetchData() {
    let currentComponent = this;

    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios
      .get('https://api.stocktwits.com/api/2/watchlists/top_watched.json')
      .then((response) => {
        const items = [];

        for(const [index, value] of response.data.top_watched.entries()){
          items.push(
            <TopWatchedCard
              key={index}
              symbol={value.symbol}
              title={value.title}
              watchCount={value.watchlist_count}
            />
          );
        }
        return items;
      }).then(function(data){
        console.log("Returned from AXIOS CALL");

        currentComponent.setState({topWatched: data});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render(){
    const persons = this.state.topWatched;

    return (
      <div>
        <div className={styles.container} data-tid="container">
          <Link to={routes.HOME}>TO SPLASHSCREEN</Link>
        </div>
        <div>
          <table>
            <th>SYMBOL</th>
            <th>NAME</th>
            <th>WATCHERS</th>
            <tbody>
              {persons}
            </tbody>
          </table>

       </div>
      </div>
    );
  };
}
