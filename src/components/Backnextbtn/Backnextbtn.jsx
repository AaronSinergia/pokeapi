import './Backnextbtn.css';
import React, { useContext } from 'react';
import NextPrevBTN from './NextPrevBTN/NextPrevBTN';
import { pokeContext } from '../../context/pokeContext';
import { handleClickAndSound } from '../../function/handleFunctions';

const Backnextbtn = () => {
  const { decrement, increment } = useContext(pokeContext);

  return (
    <>
      <div className="pokenavigate_btns">
        <audio id="click_sound" src="../sounds/click_in_button.mp3"></audio>
        <NextPrevBTN
          text={'⬅'}
          onClick={() => {
            decrement();
            handleClickAndSound();
          }}
        />
        <NextPrevBTN
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
