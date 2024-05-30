import React, { useContext } from 'react';
import './PokemonChoosed.css';
import PokedexIMG from '../PokedexIMG/PokedexIMG';
import Backnextbtn from '../Backnextbtn/Backnextbtn';
import { pokeContext } from '../../context/pokeContext';
import Navbar from '../Navbar/Navbar';

const PokemonChoosed = () => {
  const { data } = useContext(pokeContext);

  const pkmnChoosedToFight = (ev) => {
    console.log('pelea wey');
    console.log(ev.target.className); // classname actual
    ev.target.className = 'pkmn_goto_fight';
    console.log(data.types[0].type.name); // aqui seleccionamos el tipo del pokemon
    const fight_sound = document.getElementById('fight_sound');
    const start_sound = document.getElementById('start_sound');

    start_sound.pause();
    fight_sound.play();
  };

  return (
    <>
      <div className="pkmn_choosed">
        <PokedexIMG />
        <Navbar />
        <section className="text_info">
          <h3 className="pokemon_titlename">{data.name}</h3>
          <h3 className="pokemon_type"> TYPE: {data.types[0].type.name}</h3>
        </section>
        <div className="div_pkm_img">
          {data.sprites.front_default ? (
            <img
              onClick={(ev) => pkmnChoosedToFight(ev)}
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
