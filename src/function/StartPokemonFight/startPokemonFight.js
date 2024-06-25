import { useEffect } from 'react';
import { comparePokemonTypes } from '../comparePokemonTypes';

const startPokemonFight = (
  pokemonFighterData,
  data,
  setComparisionResult,
  setPokemonFighter,
  setPokemonFighterData
) => {
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
    }
  }, [
    pokemonFighterData,
    data,
    setComparisionResult,
    setPokemonFighter,
    setPokemonFighterData,
  ]);
};

export default startPokemonFight;
