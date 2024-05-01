import React, { useContext } from 'react';
import './Nextbtn.css';
import { styleButtons } from '../../../utils/buttons/style/styleButtons';
import { pokeContext } from '../../../context/pokeContext';

const Next = () => {
  const { increment } = useContext(pokeContext);

  return (
    <button onClick={increment} style={styleButtons} className="next_btn">
      ➡
    </button>
  );
};

export default Next;
