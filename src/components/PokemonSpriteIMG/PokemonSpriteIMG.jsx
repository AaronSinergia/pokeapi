import React from 'react';
import './PokemonSpriteIMG.css';

export const PokemonSpriteIMG = ({ className, onClick, src, alt }) => {
  return <img className={className} onClick={onClick} src={src} alt={alt} />;
};
