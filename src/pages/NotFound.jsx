import React from 'react';
import '../App.css';
import { styleButtons } from '../utils/buttons/style/styleButtons.js';

const NotFound = () => {
  const handleReload = () => {
    window.location.href = '/';
  };

  return (
    <div>
      <img src="../../public/pika404.jpg" alt="404" />
      <button style={styleButtons} onClick={handleReload}>
        Recargar
      </button>
    </div>
  );
};

export default NotFound;
