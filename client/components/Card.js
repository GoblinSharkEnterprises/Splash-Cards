import React from 'react';

const Card = ({front, back, id}) => {
  return <div className='card'>
    <h4>Card {id}</h4>
    <p>{front}</p>
    <hr />
    <p>{back}</p>
  </div>;
};

export default Card;
