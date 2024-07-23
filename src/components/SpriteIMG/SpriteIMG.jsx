import React from 'react';
import './SpriteIMG.scss';

export const SpriteIMG = ({ style, className, onClick, src, alt }) => {
  return (
    <img
      style={style}
      className={className}
      onClick={onClick}
      src={src}
      alt={alt}
    />
  );
};
