import { useContext, useEffect } from 'react';
import { comparePokemonTypes } from '../../function/comparePokemonTypes';
import { pokeContext } from '../../hooks/context/pokeContext';

const startPokemonFight = (
  pokemonFighterData,
  data,
  setComparisionResult,
  setPokemonFighter,
  setPokemonFighterData
) => {
  const { playAudio, pauseAudio } = useContext(pokeContext);

  useEffect(() => {
    if (pokemonFighterData) {
      const pokemonChoosedToFight = data.types[0].type.name;
      const pokemonRandomToFight = pokemonFighterData.types[0].type.name;

      comparePokemonTypes(
        pokemonChoosedToFight,
        pokemonRandomToFight,
        playAudio,
        pauseAudio
      )
        .then((comparisionResult) => {
          setComparisionResult(comparisionResult);
        })
        .catch((error) => {
          console.error('Error with comparision:', error);
        });

      const onoffButtonDisabled = document.querySelector('.onoff_div');
      onoffButtonDisabled.style.zIndex = -1;

      let navigateButtons = document.querySelector('.pokenavigate_btns');
      let navbar = document.querySelector('.navbar');

      pauseAudio('start_sound');
      playAudio('fight_sound');

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

      const choosedPokemonTitleName =
        document.querySelector('.titlename_pkmn_h3');
      const choosedPokemonTypeName = document.querySelector('.type_pkmn_h3');
      choosedPokemonTitleName.style.display = 'block';
      choosedPokemonTypeName.style.display = 'block';

      const enemyTitleName = document.querySelector('.titlename_enemy_h3');
      const enemyTypeName = document.querySelector('.type_enemy_h3');
      enemyTitleName.style.display = 'block';
      enemyTypeName.style.display = 'block';
    }
  }, [
    pokemonFighterData,
    data,
    setComparisionResult,
    setPokemonFighter,
    setPokemonFighterData,
    playAudio,
    pauseAudio,
  ]);
};

export default startPokemonFight;
