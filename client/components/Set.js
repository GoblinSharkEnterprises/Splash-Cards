import React from 'react';

const Set = ({ name, totalCards, id }) => {
  return (
    <div className='set'>
      <h3>{name}</h3>
      <p>{totalCards}</p>
      {/* link this button to /sets/id for this set */}
      <Link to={`/sets/set:${id}`}>
        <button>View This Set</button>
      </Link>
    </div>
  );
};

export default Set;
