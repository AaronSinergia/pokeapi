import React, { useContext, useState, useEffect } from 'react';
import './PokemonWinner.css';
import { pokeContext } from '../../context/pokeContext';

const PokemonWinner = () => {
  const { comparisionResult } = useContext(pokeContext);
  const [showWinner, setShowWinner] = useState(false);

  useEffect(() => {
    setShowWinner(false);
    const timerId = setTimeout(() => {
      setShowWinner(comparisionResult);
    }, 2000);

    return () => clearTimeout(timerId);
  }, [comparisionResult]);

  return (
    <div>
      {showWinner ? (
        <h3 className="title_winner">{showWinner}</h3>
      ) : (
        <h3 className="title_winner">Waiting.............</h3>
      )}
    </div>
  );
};

export default PokemonWinner;
