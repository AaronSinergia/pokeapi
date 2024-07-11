import React, { useReducer } from 'react';
import { pokeContext } from './pokeContext';

import useMultiAudio from '../custom/useMultiAudio';
import { audioFiles } from '../../utils/audio/audioFiles';

const initialState = {
  pokemon: 1,
  currentMessageIndex: 0,
  showPokeApi: false,
  pokemonFighter: false,
  pokemonFighterData: null,
  data: null,
  emptyString: '',
  // inputPkmID: '', //// estye
  inputValue: '',
  randomID: '',
  comparisionResult: '',
  showWinner: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_POKEMON':
      return { ...state, pokemon: action.payload };
    case 'SET_EMPTY_STRING':
      return { ...state, emptyString: action.payload };
    case 'SET_SHOW_POKE_API':
      return { ...state, showPokeApi: action.payload };
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'SET_INPUT_VALUE':
      return { ...state, inputValue: action.payload };
    case 'SET_CURRENT_MESSAGE_INDEX':
      return { ...state, currentMessageIndex: action.payload };
    case 'SET_POKEMON_FIGHTER':
      return { ...state, pokemonFighter: action.payload };
    case 'SET_POKEMON_FIGHTER_DATA':
      return { ...state, pokemonFighterData: action.payload };
    case 'SET_RANDOM_ID':
      return { ...state, randomID: action.payload };
    case 'SET_COMPARISION_RESULT':
      return { ...state, comparisionResult: action.payload };
    case 'SET_SHOW_WINNER':
      return { ...state, showWinner: action.payload };
    case 'INCREMENT_POKEMON':
      return {
        ...state,
        pokemon: state.pokemon < 1025 ? state.pokemon + 1 : 1,
      };
    case 'DECREMENT_POKEMON':
      return {
        ...state,
        pokemon: state.pokemon > 1 ? state.pokemon - 1 : 1025,
      };
    default:
      return state;
  }
};

const StateComp = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { playAudio, pauseAudio, setLoop, toggleMusic, musicOff } =
    useMultiAudio(audioFiles);

  return (
    <pokeContext.Provider
      value={{
        ...state,
        setPokemon: (pokemon) =>
          dispatch({ type: 'SET_POKEMON', payload: pokemon }),
        setEmptyString: (value) =>
          dispatch({ type: 'SET_EMPTY_STRING', payload: value }),
        setShowPokeApi: (show) =>
          dispatch({ type: 'SET_SHOW_POKE_API', payload: show }),
        setData: (data) => dispatch({ type: 'SET_DATA', payload: data }),
        setInputValue: (value) =>
          dispatch({ type: 'SET_INPUT_VALUE', payload: value }),
        setCurrentMessageIndex: (index) =>
          dispatch({ type: 'SET_CURRENT_MESSAGE_INDEX', payload: index }),
        setPokemonFighter: (fighter) =>
          dispatch({ type: 'SET_POKEMON_FIGHTER', payload: fighter }),
        setPokemonFighterData: (data) =>
          dispatch({ type: 'SET_POKEMON_FIGHTER_DATA', payload: data }),
        setRandomID: (id) => dispatch({ type: 'SET_RANDOM_ID', payload: id }),
        setComparisionResult: (result) =>
          dispatch({ type: 'SET_COMPARISION_RESULT', payload: result }),
        setShowWinner: (winner) =>
          dispatch({ type: 'SET_SHOW_WINNER', payload: winner }),
        increment: () => dispatch({ type: 'INCREMENT_POKEMON' }),
        decrement: () => dispatch({ type: 'DECREMENT_POKEMON' }),
        playAudio,
        pauseAudio,
        setLoop,
        toggleMusic,
        musicOff,
      }}
    >
      {children}
    </pokeContext.Provider>
  );
};

export default StateComp;
