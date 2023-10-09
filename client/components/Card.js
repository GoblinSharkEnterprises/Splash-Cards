import React from 'react';

const Card = ({ front, back, id }) => {
  return (
    <div className='card'>
      <p>Front: {front}</p>
      <hr />
      <p>Back: {back}</p>
    </div>
  );
};

export default Card;
