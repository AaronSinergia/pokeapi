import React, { useEffect, useContext } from 'react';
import './InfoPopup.css';
import { pokeContext } from '../../hooks/context/pokeContext';
import { helpMessages } from '../../function/helpMessages';
import H3Comp from '../H3Comp/H3Comp';

const InfoPopup = () => {
  const { currentMessageIndex, setCurrentMessageIndex } =
    useContext(pokeContext);

  useEffect(() => {
    // const interval = setInterval(() => {
    setCurrentMessageIndex(
      (prevIndex) => (prevIndex + 1) % helpMessages.length
    );
    // }, 9000);

    return () => clearInterval(interval);
  }, [helpMessages.length, setCurrentMessageIndex]);

  return (
    <div className="div_popup">
      {helpMessages.map((message, index) => (
        <H3Comp
          key={index}
          className={`info_popup ${
            index === currentMessageIndex ? 'visible' : 'hidden'
          }`}
          text={
            index === currentMessageIndex && (
              <span className="typewriter">{message}</span>
            )
          }
        />
      ))}
      <img src="./assets/sprite_pkmn.png" alt="sprite_pkmn" />
    </div>
  );
};

export default InfoPopup;
