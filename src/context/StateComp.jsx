import React, { useState } from 'react';
import { pokeContext } from './pokeContext';

const StateComp = ({ children }) => {
  const [pokemon, setPokemon] = useState(1);

  const increment = () => {
    setPokemon((prev) => prev + 1);
  };

  const decrement = () => {
    setPokemon((prev) => prev - 1);
  };

  return (
    <pokeContext.Provider value={{ pokemon, setPokemon, increment, decrement }}>
      {children}
    </pokeContext.Provider>
  );
};

export default StateComp;
