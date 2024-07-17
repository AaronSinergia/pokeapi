import React, { useState } from 'react';
import { pokeContext } from './pokeContext';

import useMultiAudio from '../../hooks/custom/useMultiAudio';
import { audioFiles } from '../../utils/audio/audioFiles';

const StateComp = ({ children }) => {
  const [pokemon, setPokemon] = useState(1);
  const [inputPkmID, setinputPkmID] = useState('');
  const [showPokeApi, setShowPokeApi] = useState(false);
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [pokemonFighter, setPokemonFighter] = useState(false);
  const [pokemonFighterData, setPokemonFighterData] = useState(null);
  const [randomID, setRandomID] = useState('');
  const [comparisionResult, setComparisionResult] = useState('');
  const [showGif, setShowGif] = useState(false);

  const increment = () => {
    setPokemon((nextId) => (nextId < 1025 ? nextId + 1 : 1));
  };

  const decrement = () => {
    setPokemon((prevId) => (prevId > 1 ? prevId - 1 : 1025));
  };

  const { playAudio, pauseAudio, setLoop, toggleMusic, musicOff } =
    useMultiAudio(audioFiles);

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
        currentMessageIndex,
        setCurrentMessageIndex,
        pokemonFighter,
        setPokemonFighter,
        pokemonFighterData,
        setPokemonFighterData,
        randomID,
        setRandomID,
        comparisionResult,
        setComparisionResult,
        playAudio,
        pauseAudio,
        setLoop,
        toggleMusic,
        musicOff,
        showGif,
        setShowGif,
      }}
    >
      {children}
    </pokeContext.Provider>
  );
};

export default StateComp;
