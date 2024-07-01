import React, { useContext } from 'react';
import './Button.css';
import { pokeContext } from '../../hooks/context/pokeContext';

const Button = ({ onClick, className, style, text }) => {
  const { playAudio } = useContext(pokeContext);

  const handleClick = () => {
    playAudio('click_sound');
    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick} className={className} style={style}>
      {text}
    </button>
  );
};

export default Button;
