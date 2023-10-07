import React from 'react';

const Card = ({front, back, id}) => {
  return <div className='card'>
    
    <p><strong>{id}.   </strong>Front: {front}</p>
    <p>Back: {back}</p>
  </div>;
};

export default Card;
