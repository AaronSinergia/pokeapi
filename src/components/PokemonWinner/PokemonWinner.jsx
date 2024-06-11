import React, { useContext } from 'react';
import './PokemonWinner.css';
import { pokeContext } from '../../context/pokeContext';

const PokemonWinner = () => {
  const { comparisionResult } = useContext(pokeContext);

  return (
    <div>
      <h3 className="title_winner">{comparisionResult}</h3>
    </div>
  );
};

export default PokemonWinner;
