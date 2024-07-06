import React, { useContext, useEffect } from 'react';
import './PokedexON.css';
import PokedexIMG from '../PokedexIMG/PokedexIMG';
import { pokeContext } from '../../hooks/context/pokeContext';
import Navbar from '../Navbar/Navbar';
import WinnerResult from '../WinnerResult/WinnerResult';
import Mutebttn from '../Mutebttn/Mutebttn';
import FightersInfo from '../FightersInfo/FigthersInfo';
import Button from '../Button/Button';
import { styleButtons } from '../../utils/buttons/style/styleButtons';
import { handleStartFight } from '../../function/handleFunctions';
import { comparePokemonTypes } from '../../function/comparePokemonTypes';

const PokedexON = () => {
  const {
    data,
    pokemonFighterData,
    setPokemonFighter,
    setPokemonFighterData,
    setComparisionResult,
    decrement,
    increment,
    playAudio,
    pauseAudio,
  } = useContext(pokeContext);

  useEffect(() => {
    if (pokemonFighterData) {
      handleStartFight(playAudio, pauseAudio);

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
    }
  }, [
    pokemonFighterData,
    data,
    setComparisionResult,
    setPokemonFighter,
    setPokemonFighterData,
  ]);

  const prevNextBttns = (text, onClickHandler) => (
    <Button
      className={'nextandprev_btns'}
      style={styleButtons}
      text={text}
      onClick={() => {
        onClickHandler();
      }}
    />
  );

  return (
    <div className="pkmn_choosed">
      <Mutebttn />
      <PokedexIMG />
      <Navbar />
      <FightersInfo />
      <WinnerResult />
      <div className="pokenavigate_btns">
        {prevNextBttns('⬅', decrement)}
        {prevNextBttns('➡', increment)}
      </div>
    </div>
  );
};

export default PokedexON;
