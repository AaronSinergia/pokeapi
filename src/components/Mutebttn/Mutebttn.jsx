import React, { useContext } from 'react';
import './Mutebttn.css';
import { pokeContext } from '../../context/pokeContext';
import { handleStopMusic } from '../../function/handleFunctions';

const Mutebttn = () => {
  const { musicOff, setMusicOff } = useContext(pokeContext);

  return (
    <>
      <img
        onClick={() => handleStopMusic(musicOff, setMusicOff)}
        className="mute_btn"
        src="./assets/onSound_logo.png"
        alt="mute_btn"
      />
    </>
  );
};

export default Mutebttn;
