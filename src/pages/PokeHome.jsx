// import React, { useContext } from 'react';
// import Header from '../components/Header/Header';
// import PokedexIMG from '../components/PokedexIMG/PokedexIMG';
// import InfoPopup from '../components/InfoPopup/InfoPopup';
// import PokeApi from '../../src/components/api/PokeApi';
// import Footer from '../components/footer/Footer';
// import OnoffBTN from '../components/OnoffBTN/OnoffBTN';
// import { pokeContext } from '../hooks/context/pokeContext';

// const PokeHome = () => {
//   const { showPokeApi } = useContext(pokeContext);

//   return (
//     <>
//       <Header />
//       <InfoPopup />
//       <OnoffBTN />
//       {!showPokeApi && <PokedexIMG />}
//       {showPokeApi && <PokeApi />}
//       <Footer />
//     </>
//   );
// };

// export default PokeHome;

import React, { useContext } from 'react';
import Header from '../components/Header/Header';
import PokedexIMG from '../components/PokedexIMG/PokedexIMG';
import InfoPopup from '../components/InfoPopup/InfoPopup';
import PokeApi from '../components/api/PokeApi';
import Footer from '../components/footer/Footer';
import OnoffBTN from '../components/OnoffBTN/OnoffBTN';
import { pokeContext } from '../hooks/context/pokeContext';

const PokeHome = () => {
  const { state } = useContext(pokeContext);

  return (
    <>
      <Header />
      <InfoPopup />
      <OnoffBTN />
      {!state.showPokeApi && <PokedexIMG />}
      {state.showPokeApi && <PokeApi />}
      <Footer />
    </>
  );
};

export default PokeHome;
