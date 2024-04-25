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
  };

  return (
    <>
      <Navbar setNewPkm={setNewPkm} />
      {!showPokeApi && <PokedexIMG />}
      {showPokeApi && <PokeApi newPkm={newPkm} />}

      <div className="onoff_div">
        <h2 onClick={handleTogglePokeApi} className="on_off" title="ON/OFF">
          🔵
        </h2>
      </div>

      <Footer />
    </>
  );
};

export default PokeHome;
