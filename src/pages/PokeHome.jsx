import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import PokedexIMG from '../components/PokedexIMG/PokedexIMG';
import PokeApi from '../api/PokeApi';
import Footer from '../components/footer/Footer';
import OnoffBTN from '../components/OnoffBTN/OnoffBTN';

const PokeHome = () => {
  const [newPkm, setNewPkm] = useState('');
  const [showPokeApi, setShowPokeApi] = useState(false);

  return (
    <>
      <Navbar setNewPkm={setNewPkm} />
      {!showPokeApi && <PokedexIMG />}
      {showPokeApi && <PokeApi newPkm={newPkm} />}
      <OnoffBTN showPokeApi={showPokeApi} setShowPokeApi={setShowPokeApi} />
      <Footer />
    </>
  );
};

export default PokeHome;
