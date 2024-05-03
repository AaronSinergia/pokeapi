import './NotFoundIMG.css';
import React from 'react';
import { styleButtons } from '../../utils/buttons/style/styleButtons.js';
import { handleReload } from '../../function/handleFunctions.js';

const NotFoundIMG = () => {
  return (
    <div>
      <img src="../../../public/pika404.jpg" alt="404" />
      <button style={styleButtons} onClick={handleReload}>
        Recargar
      </button>
    </div>
  );
};

export default NotFoundIMG;
