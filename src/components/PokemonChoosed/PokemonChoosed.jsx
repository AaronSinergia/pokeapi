import React, { useCallback, useContext, useEffect } from 'react';
import './PokemonChoosed.css';
import PokedexIMG from '../PokedexIMG/PokedexIMG';
import Backnextbtn from '../Backnextbtn/Backnextbtn';
import { pokeContext } from '../../context/pokeContext';
import Navbar from '../Navbar/Navbar';
import { styleButtons } from '../../utils/buttons/style/styleButtons';
import {
  handleClickAndSound,
  handleImageClick,
  handleStopFight,
} from '../../function/handleFunctions';
import { comparePokemonTypes } from '../../function/comparePokemonTypes';

import PokemonWinner from '../PokemonWinner/PokemonWinner';
import PokemonEnemyInfo from '../PokemonEnemyInfo/PokemonEnemyInfo';
import Mutebttn from '../Mutebttn/Mutebttn';

const PokemonChoosed = () => {
  const {
    data,
    pokemonFighterData,
    setPokemonFighter,
    setRandomID,
    setPokemonFighterData,
    setComparisionResult,
    musicOff,
  } = useContext(pokeContext);

  const clickInIMG = useCallback(
    (ev) => {
      handleImageClick(ev, setPokemonFighter, setRandomID, musicOff);
    },
    [setPokemonFighter, setRandomID]
  );

  const clickInSTOPBTN = useCallback(() => {
    handleStopFight(setPokemonFighter, setPokemonFighterData);
  }, [setPokemonFighter, setPokemonFighterData]);

  useEffect(() => {
    if (pokemonFighterData) {
      const pokemonChoosedToFight = data.types[0].type.name;
      const pokemonRandomToFight = pokemonFighterData.types[0].type.name;

      comparePokemonTypes(pokemonChoosedToFight, pokemonRandomToFight)
        .then((comparisionResult) => {
          setComparisionResult(comparisionResult);
        })
        .catch((error) => {
          console.error('Error with comparision:', error);
        });

      const onoffButtonDisabled = document.querySelector('.onoff_div');
      onoffButtonDisabled.style.zIndex = -1;

      const fight_sound = document.getElementById('fight_sound');
      const start_sound = document.getElementById('start_sound');
      let navigateButtons = document.querySelector('.pokenavigate_btns');
      let navbar = document.querySelector('.navbar');

      fight_sound.play();
      start_sound.pause();

      const pokemonRandomEnemy = document.querySelector('.pkmn_random_enemy');
      if (pokemonRandomEnemy) {
        pokemonRandomEnemy.style.display = 'flex';
      }

      if (navigateButtons) {
        navigateButtons.style.display = 'none';
      }
      if (navbar) {
        navbar.style.display = 'none';
      }

      const textWinnerPkmn = document.querySelector('.title_winner');
      textWinnerPkmn.style.display = 'flex';

      // WHEN FIGHT SOUND FINISHED
      fight_sound.addEventListener('ended', () => {
        setPokemonFighter(false);
        setPokemonFighterData(null);

        const yourPokemonType = document.querySelector('.pokemon_type');
        yourPokemonType.style.marginTop = '90px';

        const onoffButtonDisabled = document.querySelector('.onoff_div');
        onoffButtonDisabled.style.zIndex = 1;

        const textWinnerPkmn = document.querySelector('.title_winner');
        textWinnerPkmn.style.display = 'none';

        const pkmnGoToFight = document.querySelector('.pkmn_goto_fight');
        if (pkmnGoToFight) {
          pkmnGoToFight.className = 'pokemon_img';
          pkmnGoToFight.style.filter = 'sepia(0%)';
        }

        const pokemonRandomEnemy = document.querySelector('.pkmn_random_enemy');
        if (pokemonRandomEnemy) {
          pokemonRandomEnemy.style.display = 'none';
        }
        navigateButtons.style.display = 'flex';
        navbar.style.display = 'flex';

        start_sound.loop = true;
        start_sound.play();
      });
    }
  }, [pokemonFighterData, data]);

  return (
    <>
      <div className="pkmn_choosed">
        <Mutebttn />
        <PokedexIMG />
        <Navbar />
        <section className="text_info">
          <h3 className="pokemon_titlename">{data.name}</h3>
          <h3 className="pokemon_type">TYPE: {data.types[0].type.name}</h3>
        </section>
        <div className="div_pkm_img">
          {pokemonFighterData?.sprites ? (
            <>
              <img
                src={pokemonFighterData.sprites.front_default}
                alt={pokemonFighterData.name}
                className="pkmn_random_enemy"
              />
              <h3 className="pokemon_vs_title">vs</h3>
              <PokemonEnemyInfo />
              <button
                onClick={() => {
                  clickInSTOPBTN();
                  handleClickAndSound();
                }}
                className="stop_fight"
                style={styleButtons}
              >
                STOP FIGHT
              </button>
            </>
          ) : null}

          {data.sprites.front_default ? (
            <img
              onClick={clickInIMG}
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
        <PokemonWinner />
        <Backnextbtn />
      </div>
    </>
  );
};

export default PokemonChoosed;
