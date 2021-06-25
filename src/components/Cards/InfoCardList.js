import React from 'react';
import adventuringDictionary from '../../dictionaries/adventuring';
import InfoCard from './InfoCard';
import './InfoCardList.css';

function InfoCardList() {
  const cards = adventuringDictionary;
  const list = cards.map((item, index) => (
    <InfoCard key={index} info={item} className="info-card" />
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