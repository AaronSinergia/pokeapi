import React, { useContext } from 'react';
import './Backbtn.css';
import { styleButtons } from '../../../utils/buttons/style/styleButtons';
import { pokeContext } from '../../../context/pokeContext';

const Back = () => {
  const { decrement } = useContext(pokeContext);

  return (
    <button onClick={decrement} style={styleButtons} className="back_btn">
      ⬅
    </button>
  );
};

export default Back;
