import React, { useContext, useState, useEffect } from 'react';
import './PokemonWinner.css';
import { pokeContext } from '../../context/pokeContext';
import { styleButtons } from '../../utils/buttons/style/styleButtons';

const PokemonWinner = () => {
  const { comparisionResult } = useContext(pokeContext);
  const [showWinner, setShowWinner] = useState(false);

  useEffect(() => {
    setShowWinner(false);
    const timerId = setTimeout(() => {
      setShowWinner(comparisionResult);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [comparisionResult]);

  return (
    <div>
      {showWinner ? (
        <h3 style={styleButtons} className="title_winner">
          {showWinner}
        </h3>
      ) : (
        <h3 style={styleButtons} className="title_winner">
          Waiting.............
        </h3>
      )}
    </div>
  );
};

export default PokemonWinner;
