import React from 'react';
import Card from '../components/Card.js'

const CardContainer = ({cardList}) => {
  const cards = [];
  if(cardList){
    for(let i = 0; i < cardList.length; i++) {
      cards.push(<Card front={cardList[i].front} back={cardList[i].back} key={i} id={i} />);
    }
  }

  return (
  <div className='card-container'>
    {cards}
  </div>)
};

export default CardContainer;
