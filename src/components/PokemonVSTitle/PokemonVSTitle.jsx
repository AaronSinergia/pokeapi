import React from 'react';
import './PokemonVSTitle.css';

const PokemonVSTitle = ({ className, text }) => {
  return <h3 className={className}>{text}</h3>;
};

export default PokemonVSTitle;
