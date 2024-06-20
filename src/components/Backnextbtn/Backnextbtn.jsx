import './Backnextbtn.css';
import React, { useContext } from 'react';
import { pokeContext } from '../../context/pokeContext';
import { handleClickAndSound } from '../../function/handleFunctions';
import Button from '../Button/Button';
import { styleButtons } from '../../utils/buttons/style/styleButtons';

const Backnextbtn = () => {
  const { decrement, increment } = useContext(pokeContext);

  return (
    <>
      <div className="pokenavigate_btns">
        <Button
          className={'nextandprev_btns'}
          style={styleButtons}
          text={'⬅'}
          onClick={() => {
            decrement();
            handleClickAndSound();
          }}
        />
        <Button
          className={'nextandprev_btns'}
          style={styleButtons}
          text={'➡'}
          onClick={() => {
            increment();
            handleClickAndSound();
          }}
        />
      </div>
    </>
  );
};

export default Backnextbtn;
