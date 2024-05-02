import React, { useState } from 'react';
import { pokeContext } from './pokeContext';

const StateComp = ({ children }) => {
  const [pokemon, setPokemon] = useState(1);
  const [inputPkmID, setinputPkmID] = useState('');
  const [showPokeApi, setShowPokeApi] = useState(false);
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const increment = () => {
    setPokemon((prevId) => (prevId < 1025 ? prevId + 1 : 1));
  };

  const decrement = () => {
    setPokemon((prevId) => (prevId > 1 ? prevId - 1 : 1025));
  };

  return (
    <pokeContext.Provider
      value={{
        pokemon,
        setPokemon,
        showPokeApi,
        setShowPokeApi,
        data,
        setData,
        inputValue,
        setInputValue,
        inputPkmID,
        setinputPkmID,
        increment,
        decrement,
      }}
    >
      {children}
    </pokeContext.Provider>
  );
};

export default StateComp;
