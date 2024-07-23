import './NotFoundIMG.scss';
import React from 'react';
import { styleButtons } from '../../utils/buttons/style/styleButtons.js';
import { handleReload } from '../../function/handleFunctions.js';
import Button from '../Button/Button.jsx';

const NotFoundIMG = () => {
  return (
    <div>
      <img src="./assets/pika404.jpg" alt="404" />
      <Button style={styleButtons} onClick={handleReload} text={'Recargar'} />
    </div>
  );
};

export default NotFoundIMG;
