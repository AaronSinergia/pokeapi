import React, { useContext } from 'react';
import './PokemonEnemyInfo.css';
import { pokeContext } from '../../context/pokeContext';

const PokemonEnemyInfo = () => {
  const { pokemonFighterData } = useContext(pokeContext);

  return (
    <>
      <section className="text_info_enemy">
        <h3 className="pokemon_titlename_enemy">{pokemonFighterData.name}</h3>
        <h3 className="pokemon_type_enemy">
          TYPE: {pokemonFighterData.types[0].type.name}
        </h3>
      </section>
    </>
  );
};

export default PokemonEnemyInfo;
