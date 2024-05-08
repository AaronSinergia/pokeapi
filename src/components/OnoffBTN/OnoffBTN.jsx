import React, { useContext, useEffect } from 'react';
import './OnoffBTN.css';
import { pokeContext } from '../../context/pokeContext';

const OnoffBTN = () => {
  const { showPokeApi, setShowPokeApi } = useContext(pokeContext);

  useEffect(() => {
    const onBtnClicked = document.querySelector('.on_title');
    const pokeSearchBTN = document.querySelector('.search_btn');
    const pokeInputBTN = document.querySelector('.poke_input');
    const submitBTN = document.querySelector('.submit_btn');

    if (pokeSearchBTN) {
      pokeSearchBTN.style.display = showPokeApi ? 'grid' : 'none';
    }

    if (onBtnClicked) {
      onBtnClicked.innerHTML = showPokeApi ? 'ON' : 'OFF';
    }

    if (pokeInputBTN && submitBTN) {
      pokeInputBTN.style.display = showPokeApi ? 'grid' : 'none';
      submitBTN.style.display = showPokeApi ? 'grid' : 'none';
    }
  }, [showPokeApi]);

  const handleTogglePokeApi = () => {
    setShowPokeApi(!showPokeApi);

    const on_button = document.querySelector('.on_title');

    if (on_button.innerHTML !== 'ON') {
      const on_sound = document.getElementById('on_sound');
      on_sound.play();
    } else {
      const off_sound = document.getElementById('off_sound');
      off_sound.play();
    }
  };

  return (
    <div onClick={handleTogglePokeApi} className="onoff_div">
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
