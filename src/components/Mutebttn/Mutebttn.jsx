import React, { useContext } from 'react';
import './Mutebttn.css';
import { pokeContext } from '../../hooks/context/pokeContext';
import { handleStopMusic } from '../../function/handleFunctions';

const Mutebttn = () => {
  const { musicOff, setMusicOff, playAudio, pauseAudio } =
    useContext(pokeContext);

  return (
    <>
      <img
        onClick={() =>
          handleStopMusic(musicOff, setMusicOff, playAudio, pauseAudio)
        }
        className="mute_btn"
        src="./assets/onSound_logo.png"
        alt="mute_btn"
      />
    </>
  );
};

export default Mutebttn;
