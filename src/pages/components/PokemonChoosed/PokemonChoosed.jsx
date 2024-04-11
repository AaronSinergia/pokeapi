import React from 'react';
import './PokemonChoosed.css';
import PokedexBckgrnd from '../PokedexBckgrnd/PokedexBckgrnd';
import Footer from '../Footer/Footer';

const PokemonChoosed = ({ pokemon }) => {
  return (
    <>
      <PokedexBckgrnd />
      <h3 className="pokemon_titlename">{pokemon.name}</h3>
      <h3 className="pokemon_type"> TYPE: {pokemon.types[0].type.name}</h3>
      <div className="div_pkm_img">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon_img"
        />
      </div>
      <Footer />
    </>
  );
};

export default PokemonChoosed;
