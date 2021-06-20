import React from 'react';
import InfoCard from './InfoCard';
import './InfoCardList.css';

function InfoCardList() {
  const cards = [1,2,3,4,5];
  const list = cards.map((item, index) => (
    <InfoCard key={index} card={item} className="info-card" />
  ));

  return (
  <div>
    {list.length > 0 
      ? <div className="list">{list}</div>
      : <div className="noResults">No results were found that match your criteria</div>}
  </div>
  );
};

export default InfoCardList;