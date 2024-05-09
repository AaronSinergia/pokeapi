import React from 'react';
import './NextPrevBTN.css';
import { styleButtons } from '../../../utils/buttons/style/styleButtons';

const NextPrevBTN = ({ text, onClick }) => {
  return (
    <button onClick={onClick} style={styleButtons} className="nextandprev_btns">
      {text}
    </button>
  );
};

export default NextPrevBTN;
