import React from 'react';
import { Link } from 'react-router-dom';

const Set = ({ name, totalCards, id }) => {
  return (
    <div className='set'>
      <h3>{name}</h3>
      <p>Total cards: {totalCards}</p>
      {/* link this button to /sets/id for this set */}
      <Link to={`/sets/set/${id}`}>
        <button>View This Set</button>
      </Link>
      <Link to={`/testSet/${id}`}>
        <button>Test This Set</button>
      </Link>
    </div>
  );
};

export default Set;
