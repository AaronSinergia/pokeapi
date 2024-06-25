import React from 'react';
import './SpriteIMG.css';

export const SpriteIMG = ({ className, onClick, src, alt }) => {
  return <img className={className} onClick={onClick} src={src} alt={alt} />;
};
