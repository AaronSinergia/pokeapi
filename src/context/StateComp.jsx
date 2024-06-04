import React, { useState } from 'react';
import { pokeContext } from './pokeContext';

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

  const increment = () => {
    setPokemon((nextId) => (nextId < 1025 ? nextId + 1 : 1));
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
        currentMessageIndex,
        setCurrentMessageIndex,
        pokemonFighter,
        setPokemonFighter,
        pokemonFighterData,
        setPokemonFighterData,
        randomID,
        setRandomID,
      }}
    >
      <audio id="on_sound" src="../sounds/on_sound.mp3"></audio>
      <audio id="off_sound" src="../sounds/off_sound.mp3"></audio>
      <audio id="start_sound" src="../sounds/pokemon_title_song.mp3"></audio>
      {/* <audio id="fight_sound" src="../sounds/fight_sound.mp3"></audio> */}
      <audio id="fight_sound" src="../sounds/on_sound.mp3"></audio>
      {/* borrar este clickinbuttron */}
      {children}
    </pokeContext.Provider>
  );
};

export default StateComp;
