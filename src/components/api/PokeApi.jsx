// import React, { useContext, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import PokemonChoosed from '../components/PokemonChoosed/PokemonChoosed';
// import { fetchFunction } from '../function/fetchFunction';
// import { pokeContext } from '../context/pokeContext';
// import { default_POKEAPI_Url } from '../config/urls';

// const PokeApi = () => {
//   const { pokemonName } = useParams();
//   const { pokemon, setPokemon, data, setData, inputPkmID } =
//     useContext(pokeContext);

//   const defaultAPI_URL = `${default_POKEAPI_Url}/${pokemon}`;

//   useEffect(() => {
//     fetchFunction(defaultAPI_URL, setData);
//   }, [pokemon, defaultAPI_URL]);

//   useEffect(() => {
//     if (inputPkmID) {
//       fetch(`${default_POKEAPI_Url}/${inputPkmID}`)
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error('La consulta realizada no es válida');
//           }
//           return response.json();
//         })
//         .then((apiData) => {
//           setPokemon(apiData.id);
//         })
//         .catch((error) => {
//           console.log(error);
//           alert('No se ha encontrado ningún Pokemon con ese nombre');
//         });
//     }
//   }, [inputPkmID]);

//   const pokemonWritedInSEARCHBAR = pokemonName ? pokemonName.toLowerCase() : '';

//   useEffect(() => {
//     if (pokemonName) {
//       fetch(`${default_POKEAPI_Url}/${pokemonWritedInSEARCHBAR}`)
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error('La consulta realizada no es válida');
//           }
//           return response.json();
//         })
//         .then((apiData) => {
//           setPokemon(apiData.id);
//         })
//         .catch((error) => {
//           console.log(error);
//           alert('No se ha encontrado ningún Pokemon con ese nombre');
//         });
//     }
//   }, [pokemonWritedInSEARCHBAR]);

//   return (
//     <>
//       {data ? (
//         <>
//           <PokemonChoosed />
//         </>
//       ) : (
//         <>
//           <p>Cargando...</p>
//         </>
//       )}
//     </>
//   );
// };

// export default PokeApi;

import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokemonChoosed from '../PokemonChoosed/PokemonChoosed';
import { fetchFunction } from '../../function/fetchFunction';
import { pokeContext } from '../../context/pokeContext';
import { default_POKEAPI_Url } from '../../config/urls';

const PokeApi = () => {
  const { pokemonName } = useParams();
  const { data, setData, pokemon, setPokemon, inputPkmID } =
    useContext(pokeContext);

  const defaultAPI_URL = `${default_POKEAPI_Url}/${pokemon}`;
  useEffect(() => {
    fetchFunction(defaultAPI_URL, setData);
  }, [pokemon, defaultAPI_URL]);

  useEffect(() => {
    if (inputPkmID) {
      fetchFunction(
        `${default_POKEAPI_Url}/${inputPkmID}`,
        setData,
        setPokemon
      );
    } else if (pokemonName) {
      const pokemonWritedInSEARCHBAR = pokemonName.toLowerCase();
      fetchFunction(
        `${default_POKEAPI_Url}/${pokemonWritedInSEARCHBAR}`,
        setData,
        setPokemon
      );
    }
  }, [inputPkmID, pokemonName, setData, setPokemon]);

  return (
    <>
      {data ? (
        <>
          <PokemonChoosed />
        </>
      ) : (
        <>
          <p>Cargando...</p>
        </>
      )}
    </>
  );
};

export default PokeApi;