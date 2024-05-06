import React, { useContext, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import PokedexIMG from '../components/PokedexIMG/PokedexIMG';
import PokeApi from '../api/PokeApi';
import Footer from '../components/footer/Footer';
import OnoffBTN from '../components/OnoffBTN/OnoffBTN';
import { pokeContext } from '../context/pokeContext';

const PokeHome = () => {
  const { showPokeApi } = useContext(pokeContext);

  return (
    <>
      <Navbar />
      {!showPokeApi && <PokedexIMG />}
      {showPokeApi && <PokeApi />}
      <OnoffBTN />
      <Footer />
    </>
  );
};

export default PokeHome;
