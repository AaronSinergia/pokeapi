import React, { useContext } from 'react';
import './OnoffBTN.scss';
import { pokeContext } from '../../hooks/context/pokeContext';
import { handleTogglePokeApi } from '../../function/handleFunctions';
import H3Comp from '../H3Comp/H3Comp';

const OnoffBTN = () => {
  const { state, dispatch, playAudio, pauseAudio, setLoop } =
    useContext(pokeContext);

  return (
    <div
      onClick={() =>
        handleTogglePokeApi(
          state.showPokeApi,
          (value) => dispatch({ type: 'SET_SHOW_POKE_API', payload: value }),
          playAudio,
          pauseAudio,
          setLoop
        )
      }
      className="onoff_div"
    >
      <h2
        style={state.pokemonFighterData ? { zIndex: 1 } : { zIndex: -1 }}
        className="on_off"
        title="ON/OFF"
      >
        🔵
      </h2>
      <H3Comp className={'on_title'} text={state.showPokeApi ? 'ON' : 'OFF'} />
    </div>
  );
};

export default OnoffBTN;
