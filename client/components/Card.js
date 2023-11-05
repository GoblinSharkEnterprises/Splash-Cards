import React from 'react';

const Card = ({ front, back, id }) => {
  return (
    <div className='card'>
      <div className='card-content'>
        <div className='card-side'>
          <p>{front}</p>
        </div>
        <div className='card-divider'></div>
        <div className='card-side'>
          <p>{back}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
