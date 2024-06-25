import React, { useContext } from 'react';
import './PokemonChoosed.css';
import PokedexIMG from '../PokedexIMG/PokedexIMG';
import { pokeContext } from '../../context/pokeContext';
import Navbar from '../Navbar/Navbar';
import WinnerResult from '../WinnerResult/WinnerResult';
import Mutebttn from '../Mutebttn/Mutebttn';
import startPokemonFight from '../../function/StartPokemonFight/startPokemonFight';
import FightersInfo from '../FightersInfo/FigthersInfo';
import { handleClickAndSound } from '../../function/handleFunctions';
import Button from '../Button/Button';
import { styleButtons } from '../../utils/buttons/style/styleButtons';

const PokemonChoosed = () => {
  const {
    data,
    pokemonFighterData,
    setPokemonFighter,
    setPokemonFighterData,
    setComparisionResult,
    decrement,
    increment,
  } = useContext(pokeContext);

  startPokemonFight(
    pokemonFighterData,
    data,
    setComparisionResult,
    setPokemonFighter,
    setPokemonFighterData
  );

  const prevNextBttns = (text, onClickHandler) => (
    <Button
      className={'nextandprev_btns'}
      style={styleButtons}
      text={text}
      onClick={() => {
        onClickHandler();
        handleClickAndSound();
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

export default PokemonChoosed;
