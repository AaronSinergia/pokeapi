import React, { useCallback, useContext, useEffect } from 'react';
import './PokemonChoosed.css';
import PokedexIMG from '../PokedexIMG/PokedexIMG';
import Backnextbtn from '../Backnextbtn/Backnextbtn';
import { pokeContext } from '../../context/pokeContext';
import Navbar from '../Navbar/Navbar';
import { styleButtons } from '../../utils/buttons/style/styleButtons';
import { handleClickAndSound } from '../../function/handleFunctions';
import { comparePokemonTypes } from '../../function/comparePokemonTypes';

import PokemonWinner from '../PokemonWinner/PokemonWinner';
import PokemonEnemyInfo from '../PokemonEnemyInfo/PokemonEnemyInfo';

const PokemonChoosed = () => {
  const {
    data,
    pokemonFighterData,
    setPokemonFighter,
    setRandomID,
    setPokemonFighterData,
    setComparisionResult,
  } = useContext(pokeContext);

  const handleImageClick = useCallback(
    (ev) => {
      setPokemonFighter(true);

      const randomPkmnID = Math.floor(Math.random() * 1025);
      setRandomID(randomPkmnID);

      ev.target.className = 'pkmn_goto_fight';

      const pokemonWinnerTitle = document.querySelector('.title_winner');
      pokemonWinnerTitle.style.zIndex = 1;

      const pokemonImg = document.querySelector('.pkmn_goto_fight');
      const pokemonRandomEnemy = document.querySelector('.pkmn_random_enemy');
      if (pokemonImg) {
        pokemonImg.style.filter = 'sepia(0%)';
        pokemonRandomEnemy.style.filter = 'sepia(0%)';
      }
    },
    [setPokemonFighter, setRandomID]
  );

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

        const pokemonImg = document.querySelector('.pkmn_goto_fight');
        if (pokemonImg) {
          pokemonImg.className = 'pokemon_img';
          pokemonImg.style.filter = 'sepia(0%)';
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

  const handleStopFight = useCallback(() => {
    setPokemonFighter(false);
    setPokemonFighterData(null);

    const onoffButtonDisabled = document.querySelector('.onoff_div');
    onoffButtonDisabled.style.zIndex = 1;

    const textWinnerPkmn = document.querySelector('.title_winner');
    textWinnerPkmn.style.display = 'none';

    const pokemonGoToFight = document.querySelector('.pkmn_goto_fight');
    pokemonGoToFight.className = 'pokemon_img';

    let musicOffLogo = document.querySelector('.mute_btn');
    musicOffLogo.style.display = 'flex';

    const pokemonType = document.querySelector('.pokemon_type');
    if (pokemonType) {
      pokemonType.style.position = 'relative';
      pokemonType.style.marginTop = '15px';
      pokemonType.style.marginLeft = '0px';
    }

    const fight_sound = document.getElementById('fight_sound');
    const start_sound = document.getElementById('start_sound');

    if (fight_sound) fight_sound.pause();
    if (start_sound) {
      start_sound.loop = true;
      start_sound.play();
    }

    const pokemonRandomEnemy = document.querySelector('.pkmn_random_enemy');
    if (pokemonRandomEnemy) {
      pokemonRandomEnemy.style.display = 'none';
    }

    const pokemonChoosed = document.querySelector('.pokemon_img');
    pokemonChoosed.style.filter = 'sepia(0%)';

    let navigateButtons = document.querySelector('.pokenavigate_btns');
    if (navigateButtons) {
      navigateButtons.style.display = 'flex';
    }

    let navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.style.display = 'flex';
    }
  }, [setPokemonFighter, setPokemonFighterData]);

  return (
    <>
      <div className="pkmn_choosed">
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
                  handleStopFight();
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
        <PokemonWinner />
        <Backnextbtn />
      </div>
    </>
  );
};

export default PokemonChoosed;
