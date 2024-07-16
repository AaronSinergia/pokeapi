import React, { useContext } from 'react';
import './OnoffBTN.css';
import { pokeContext } from '../../hooks/context/pokeContext';
import { handleTogglePokeApi } from '../../function/handleFunctions';
import H3Comp from '../H3Comp/H3Comp';

const OnoffBTN = () => {
  const {
    pokemonFighterData,
    showPokeApi,
    setShowPokeApi,
    playAudio,
    pauseAudio,
    setLoop,
  } = useContext(pokeContext);

  return (
    <div
      onClick={() =>
        handleTogglePokeApi(
          showPokeApi,
          setShowPokeApi,
          playAudio,
          pauseAudio,
          setLoop
        )
      }
      className="onoff_div"
    >
      <h2
        style={pokemonFighterData ? { zIndex: 1 } : { zIndex: -1 }}
        className="on_off"
        title="ON/OFF"
      >
        🔵
      </h2>
      <H3Comp className={'on_title'} text={showPokeApi ? 'ON' : 'OFF'} />
    </div>
  );
};

export default OnoffBTN;
