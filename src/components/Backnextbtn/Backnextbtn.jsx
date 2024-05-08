import './Backnextbtn.css';
import React, { useContext } from 'react';
import NextPrevBTN from './Nextbtn/NextPrevBTN';
import { pokeContext } from '../../context/pokeContext';

const Backnextbtn = () => {
  const { decrement, increment } = useContext(pokeContext);

  return (
    <>
      <div className="pokenavigate_btns">
        <NextPrevBTN text={'⬅'} onClick={decrement} />
        <NextPrevBTN text={'➡'} onClick={increment} />
      </div>
    </>
  );
};

export default Backnextbtn;
