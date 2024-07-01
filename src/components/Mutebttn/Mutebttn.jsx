import React, { useContext } from 'react';
import './Mutebttn.css';
import { pokeContext } from '../../hooks/context/pokeContext';
import { handleStopMusic } from '../../function/handleFunctions';

const Mutebttn = () => {
  const { toggleMusic, musicOff } = useContext(pokeContext);

  return (
    <>
      <img
        onClick={() => handleStopMusic(toggleMusic)}
        className="mute_btn"
        src={musicOff ? './assets/mute_logo.png' : './assets/onSound_logo.png'}
        alt="mute_btn"
      />
    </>
  );
};

export default Mutebttn;
