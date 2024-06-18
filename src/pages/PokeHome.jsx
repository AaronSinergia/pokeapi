import React, { useContext } from 'react';
import PokeTitle from '../components/PokeTitle/PokeTitle';
import PokedexIMG from '../components/PokedexIMG/PokedexIMG';
import InfoPopup from '../components/InfoPopup/InfoPopup';
import PokeApi from '../../src/components/api/PokeApi';
import Footer from '../components/footer/Footer';
import OnoffBTN from '../components/OnoffBTN/OnoffBTN';
import { pokeContext } from '../context/pokeContext';

const PokeHome = () => {
  const { showPokeApi } = useContext(pokeContext);

  return (
    <>
      <PokeTitle />
      <InfoPopup />
      <OnoffBTN />
      {!showPokeApi && <PokedexIMG />}
      {showPokeApi && <PokeApi />}
      <Footer />
    </>
  );
};

export default PokeHome;
