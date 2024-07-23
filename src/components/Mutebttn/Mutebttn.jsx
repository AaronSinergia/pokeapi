import React, { useContext } from 'react';
import './Mutebttn.scss';
import { pokeContext } from '../../hooks/context/pokeContext';
import { handleStopMusic } from '../../function/handleFunctions';

const Mutebttn = () => {
  const { playAudio, toggleMusic, musicOff } = useContext(pokeContext);

  return (
    <>
      <img
        onClick={() => handleStopMusic(playAudio, toggleMusic)}
        className="mute_btn"
        src={musicOff ? './assets/mute_logo.png' : './assets/onSound_logo.png'}
        alt="mute_btn"
      />
    </>
  );
};

export default Mutebttn;
