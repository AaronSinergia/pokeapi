import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import PokedexIMG from '../components/PokedexIMG/PokedexIMG';
import PokeApi from '../api/PokeApi';
import Footer from '../components/footer/Footer';

const PokeHome = () => {
  const [newPkm, setNewPkm] = useState('');
  const [showPokeApi, setShowPokeApi] = useState(false);

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
    <>
      <Navbar setNewPkm={setNewPkm} />
      {!showPokeApi && <PokedexIMG />}
      {showPokeApi && <PokeApi newPkm={newPkm} />}

      <div onClick={handleTogglePokeApi} className="onoff_div">
        <h3 className="on_title">OFF</h3>
        <h2 className="on_off" title="ON/OFF">
          🔵
        </h2>
      </div>

      <Footer />
    </>
  );
};

export default PokeHome;
