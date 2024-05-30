import React, { useEffect, useContext } from 'react';
import './InfoPopup.css';
import { pokeContext } from '../../context/pokeContext';
import { helpMessages } from '../../function/helpMessages';

const InfoPopup = () => {
  const { currentMessageIndex, setCurrentMessageIndex } =
    useContext(pokeContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex(
        (prevIndex) => (prevIndex + 1) % helpMessages.length
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [helpMessages.length, setCurrentMessageIndex]);

  return (
    <div className="div_popup">
      {helpMessages.map((message, index) => (
        <h3
          key={index}
          className={`info_popup ${
            index === currentMessageIndex ? 'visible' : 'hidden'
          }`}
        >
          {index === currentMessageIndex && (
            <span className="typewriter">{message}</span>
          )}
        </h3>
      ))}
      <img src="./assets/sprite_pkmn.png" alt="sprite_pkmn" />
    </div>
  );
};

export default InfoPopup;
