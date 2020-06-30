import React from 'react';

type TopWatched = {
  symbol: string;
  title: string;
  watchCount: number;
}

const TopWatchedCard = ({ symbol, title, watchCount }: TopWatched) => (
      <tr>
        <td>{symbol}</td>
        <td>{title}</td>
        <td>{watchCount}</td>
      </tr>
);

export default TopWatchedCard;
