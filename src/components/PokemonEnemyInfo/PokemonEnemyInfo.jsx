import React, { useContext } from 'react';
import './PokemonEnemyInfo.css';
import { pokeContext } from '../../context/pokeContext';
import PokemonTitleName from '../PokemonTitleName/PokemonTitleName';

const PokemonEnemyInfo = () => {
  const { pokemonFighterData } = useContext(pokeContext);

  return (
    <>
      <section className="text_info_enemy">
        <PokemonTitleName
          className={'pokemon_titlename_enemy'}
          titleName={pokemonFighterData.name}
        />
        <h3 className="pokemon_type_enemy">
          TYPE: {pokemonFighterData.types[0].type.name}
        </h3>
      </section>
    </>
  );
};

export default PokemonEnemyInfo;
