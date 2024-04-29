import React from 'react';
import './Back.css';
import { styleButtons } from '../../../utils/buttons/style/styleButtons';

const Back = () => {
  return (
    <button style={styleButtons} className="back_btn">
      ⬅
    </button>
  );
};

export default Back;
