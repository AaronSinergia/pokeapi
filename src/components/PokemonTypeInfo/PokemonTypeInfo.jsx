import React from 'react';
import './PokemonTypeInfo.css';

const PokemonTypeInfo = ({ className, pokemonType }) => {
  return <h3 className={className}>TYPE: {pokemonType}</h3>;
};

export default PokemonTypeInfo;
