import React, { useContext, useEffect } from 'react';
import './OnoffBTN.css';
import { pokeContext } from '../../context/pokeContext';

const OnoffBTN = () => {
  const { showPokeApi, setShowPokeApi } = useContext(pokeContext);

  useEffect(() => {
    const onBtnClicked = document.querySelector('.on_title');
    const pokeSearchBTN = document.querySelector('.search_btn');
    const pokeInputBTN = document.querySelector('.poke_input');
    const submitBTN = document.querySelector('.submit_btn');

    if (pokeSearchBTN) {
      pokeSearchBTN.style.display = showPokeApi ? 'grid' : 'none';
    }

    if (onBtnClicked) {
      onBtnClicked.innerHTML = showPokeApi ? 'ON' : 'OFF';
    }

    if (pokeInputBTN && submitBTN) {
      pokeInputBTN.style.display = showPokeApi ? 'grid' : 'none';
      submitBTN.style.display = showPokeApi ? 'grid' : 'none';
      submitBTN.style.marginLeft = showPokeApi ? '20px' : '0px';
    }
  }, [showPokeApi]);

  const handleTogglePokeApi = () => {
    setShowPokeApi(!showPokeApi);
  };

  return (
    <div onClick={handleTogglePokeApi} className="onoff_div">
      <h3 className="on_title">{showPokeApi ? 'ON' : 'OFF'}</h3>
      <h2 className="on_off" title="ON/OFF">
        🔵
      </h2>
    </div>
  );
};

export default OnoffBTN;
