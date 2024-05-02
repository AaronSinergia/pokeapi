import React, { useContext } from 'react';
import './OnoffBTN.css';
import { pokeContext } from '../../context/pokeContext';

const OnoffBTN = () => {
  const { showPokeApi, setShowPokeApi } = useContext(pokeContext);

  const handleTogglePokeApi = () => {
    setShowPokeApi(!showPokeApi);
    const onBtnClicked = document.querySelector('.on_title');
    if (onBtnClicked.innerHTML === 'OFF') {
      onBtnClicked.innerHTML = 'ON';
    } else {
      onBtnClicked.innerHTML = 'OFF';
    }
  };

  return (
    <div onClick={handleTogglePokeApi} className="onoff_div">
      <h3 className="on_title">OFF</h3>
      <h2 className="on_off" title="ON/OFF">
        🔵
      </h2>
    </div>
  );
};

export default OnoffBTN;
