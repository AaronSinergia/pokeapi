import React, { useContext } from 'react';
import './PokedexON.scss';
import PokedexIMG from '../PokedexIMG/PokedexIMG';
import { pokeContext } from '../../hooks/context/pokeContext';
import Navbar from '../Navbar/Navbar';
import WinnerResult from '../WinnerResult/WinnerResult';
import Mutebttn from '../Mutebttn/Mutebttn';
import FightersInfo from '../FightersInfo/FigthersInfo';
import Button from '../Button/Button';
import { styleButtons } from '../../utils/buttons/style/styleButtons';

const PokedexON = () => {
  const { state, increment, decrement } = useContext(pokeContext);

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
      <div
        style={
          state.pokemonFighterData ? { display: 'none' } : { display: 'flex' }
        }
        className="pokenavigate_btns"
      >
        {prevNextBttns('⬅', decrement)}
        {prevNextBttns('➡', increment)}
      </div>
    </div>
  );
};

export default PokedexON;
