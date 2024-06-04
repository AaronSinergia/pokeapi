import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokemonChoosed from '../PokemonChoosed/PokemonChoosed';
import { fetchFunction } from '../../function/fetchFunction';
import { pokeContext } from '../../context/pokeContext';
import { default_POKEAPI_Url } from '../../config/urls';

const PokeApi = () => {
  const { pokemonName } = useParams();
  const {
    data,
    setData,
    pokemon,
    setPokemon,
    inputPkmID,
    pokemonFighter,
    setPokemonFighterData,
    randomID,
  } = useContext(pokeContext);

  const defaultAPI_URL = `${default_POKEAPI_Url}/${pokemon}`;

  useEffect(() => {
    fetchFunction(defaultAPI_URL)
      .then((apiData) => {
        setData(apiData);
      })
      .catch((error) => {
        console.log(error);
        alert('No se ha encontrado ningún Pokemon');
      });
  }, [pokemon]);

  useEffect(() => {
    if (inputPkmID) {
      fetchFunction(`${default_POKEAPI_Url}/${inputPkmID}`)
        .then((apiData) => {
          setPokemon(apiData.id);
        })
        .catch((error) => {
          console.log(error);
          alert('No se ha encontrado ningún Pokemon');
        });
    } else if (pokemonName) {
      const pokemonWritedInSEARCHBAR = pokemonName.toLowerCase();
      fetchFunction(`${default_POKEAPI_Url}/${pokemonWritedInSEARCHBAR}`)
        .then((apiData) => {
          setPokemon(apiData.id);
        })
        .catch((error) => {
          console.log(error);
          alert('No se ha encontrado ningún Pokemon');
        });
    }
  }, [inputPkmID, pokemonName, setPokemon]);

  useEffect(() => {
    if (pokemonFighter) {
      const pokemonFightURL = `${default_POKEAPI_Url}/${randomID}`;

      fetchFunction(pokemonFightURL)
        .then((apiData) => {
          setPokemonFighterData(apiData);
        })
        .catch((error) => {
          console.log(error);
          alert('No se ha encontrado ningún Pokemon para luchar');
        });
    }
  }, [pokemonFighter, setPokemonFighterData, randomID]);

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
