import React, { useCallback, useContext } from 'react';
import './PokemonChoosed.css';
import PokedexIMG from '../PokedexIMG/PokedexIMG';
import Backnextbtn from '../Backnextbtn/Backnextbtn';
import { pokeContext } from '../../context/pokeContext';
import Navbar from '../Navbar/Navbar';
import { pkmnChoosedToFight } from '../../function/pkmnChoosedToFight';

const PokemonChoosed = () => {
  const { data, pokemonFighterData, setPokemonFighter } =
    useContext(pokeContext);

  const handleImageClick = useCallback(
    (ev) => {
      pkmnChoosedToFight(ev, setPokemonFighter);
    },
    [setPokemonFighter]
  );

  return (
    <>
      <div className="pkmn_choosed">
        {pokemonFighterData?.sprites ? (
          <img
            src={pokemonFighterData.sprites.front_default}
            alt={pokemonFighterData.name}
            className="pkmn_random_tofight"
          />
        ) : null}

        <PokedexIMG />
        <Navbar />
        <section className="text_info">
          <h3 className="pokemon_titlename">{data.name}</h3>
          <h3 className="pokemon_type"> TYPE: {data.types[0].type.name}</h3>
        </section>
        <div className="div_pkm_img">
          {data.sprites.front_default ? (
            <img
              onClick={handleImageClick}
              src={data.sprites.front_default}
              alt={data.name}
              className="pokemon_img"
            />
          ) : (
            <img
              src="./assets/no-image-icon-4.png"
              alt={data.name}
              className="pokemon_img"
            />
          )}
        </div>
        <Backnextbtn />
      </div>
    </>
  );
};

export default PokemonChoosed;
