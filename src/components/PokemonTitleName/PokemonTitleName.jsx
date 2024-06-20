import React from 'react';
import './PokemonTitleName.css';

const PokemonTitleName = ({ className, titleName }) => {
  return <h3 className={className}>{titleName}</h3>;
};

export default PokemonTitleName;
