import React, { useContext } from 'react';
import './OnoffBTN.css';
import { pokeContext } from '../../context/pokeContext';
import { handleTogglePokeApi } from '../../function/handleFunctions';

const OnoffBTN = () => {
  const { showPokeApi, setShowPokeApi } = useContext(pokeContext);

  return (
    <div
      onClick={() => handleTogglePokeApi(showPokeApi, setShowPokeApi)}
      className="onoff_div"
    >
      <audio id="on_sound" src="../sounds/on_sound.mp3"></audio>
      <audio id="off_sound" src="../sounds/off_sound.mp3"></audio>
      <h2 onClick={handleTogglePokeApi} className="on_off" title="ON/OFF">
        🔵
      </h2>
      <h3 onClick={handleTogglePokeApi} className="on_title">
        {showPokeApi ? 'ON' : 'OFF'}
      </h3>
    </div>
  );
};

export default OnoffBTN;
