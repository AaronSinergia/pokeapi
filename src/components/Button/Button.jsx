import './Button.scss';
import React, { useContext } from 'react';
import { pokeContext } from '../../hooks/context/pokeContext';

const Button = ({ onClick, className, style, text }) => {
  const { playAudio } = useContext(pokeContext);

  const handleClick = () => {
    if (playAudio) {
      playAudio('click_sound');
    }
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
