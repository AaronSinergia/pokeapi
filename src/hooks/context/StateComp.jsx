import React, { useReducer } from 'react';
import { pokeContext } from './pokeContext';

import useMultiAudio from '../../hooks/custom/useMultiAudio';
import { audioFiles } from '../../utils/audio/audioFiles';

const initialState = {
  pokemon: 1,
  currentMessageIndex: 0,
  inputPkmID: '',
  inputValue: '',
  randomID: '',
  comparisionResult: '',
  showPokeApi: false,
  pokemonFighter: false,
  showGif: false,
  pokemonFighterData: null,
  data: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_POKEMON':
      return { ...state, pokemon: action.payload };
    case 'SET_CURRENT_MESSAGE_INDEX':
      return { ...state, currentMessageIndex: action.payload };
    case 'SET_INPUT_PKM_ID':
      return { ...state, inputPkmID: action.payload };
    case 'SET_INPUT_VALUE':
      return { ...state, inputValue: action.payload };
    case 'SET_RANDOM_ID':
      return { ...state, randomID: action.payload };
    case 'SET_COMPARISION_RESULT':
      return { ...state, comparisionResult: action.payload };
    case 'SET_SHOW_POKE_API':
      return { ...state, showPokeApi: action.payload };
    case 'SET_POKEMON_FIGHTER':
      return { ...state, pokemonFighter: action.payload };
    case 'SET_SHOW_GIF':
      return { ...state, showGif: action.payload };
    case 'SET_POKEMON_FIGHTER_DATA':
      return { ...state, pokemonFighterData: action.payload };
    case 'SET_DATA':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const StateComp = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({
      type: 'SET_POKEMON',
      payload: state.pokemon < 1025 ? state.pokemon + 1 : 1,
    });
  };

  const decrement = () => {
    dispatch({
      type: 'SET_POKEMON',
      payload: state.pokemon > 1 ? state.pokemon - 1 : 1025,
    });
  };

  const { playAudio, pauseAudio, setLoop, toggleMusic, musicOff } =
    useMultiAudio(audioFiles);

  return (
    <pokeContext.Provider
      value={{
        state,
        dispatch,
        increment,
        decrement,
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
