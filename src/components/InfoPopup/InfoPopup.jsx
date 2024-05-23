import React, { useEffect, useContext } from 'react';
import './InfoPopup.css';
import { pokeContext } from '../../context/pokeContext';

const InfoPopup = () => {
  const { currentMessageIndex, setCurrentMessageIndex } =
    useContext(pokeContext);

  const messages = [
    'Click on top of the Pokemon and fight randomly! ⚔',
    'Wins the stronger Pokemon type 💪',
    'Use arrows to choose your Pokemon 😻',
    'Write in input to search your Pokemon 😻',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [messages.length, setCurrentMessageIndex]);

  return (
    <div className="div_popup">
      {messages.map((message, index) => (
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
