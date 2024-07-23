import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokedexON from '../PokedexON/PokedexON';
import { fetchFunction } from '../../function/fetchFunction';
import { pokeContext } from '../../hooks/context/pokeContext';
import { default_POKEAPI_Url } from '../../config/urls';

const PokeApi = () => {
  const { pokemonName } = useParams();
  const { state, dispatch } = useContext(pokeContext);

  const defaultAPI_URL = `${default_POKEAPI_Url}/${state.pokemon}`;

  useEffect(() => {
    fetchFunction(defaultAPI_URL)
      .then((apiData) => {
        dispatch({ type: 'SET_DATA', payload: apiData });
      })
      .catch((error) => {
        console.log(error);
        alert('No se ha encontrado ningún Pokemon');
      });
  }, [state.pokemon, dispatch, defaultAPI_URL]);

  useEffect(() => {
    if (state.inputPkmID) {
      fetchFunction(`${default_POKEAPI_Url}/${state.inputPkmID}`)
        .then((apiData) => {
          dispatch({ type: 'SET_POKEMON', payload: apiData.id });
        })
        .catch((error) => {
          console.log(error);
          alert('No se ha encontrado ningún Pokemon');
        });
    } else if (pokemonName) {
      const pokemonWritedInSEARCHBAR = pokemonName.toLowerCase();
      fetchFunction(`${default_POKEAPI_Url}/${pokemonWritedInSEARCHBAR}`)
        .then((apiData) => {
          dispatch({ type: 'SET_POKEMON', payload: apiData.id });
        })
        .catch((error) => {
          console.log(error);
          alert('No se ha encontrado ningún Pokemon');
        });
    }
  }, [state.inputPkmID, pokemonName, dispatch]);

  useEffect(() => {
    if (state.pokemonFighter) {
      const pokemonFightURL = `${default_POKEAPI_Url}/${state.randomID}`;

      fetchFunction(pokemonFightURL)
        .then((apiData) => {
          dispatch({ type: 'SET_POKEMON_FIGHTER_DATA', payload: apiData });
        })
        .catch((error) => {
          console.log(error);
          alert('No se ha encontrado ningún Pokemon para luchar');
        });
    }
  }, [state.pokemonFighter, state.randomID, dispatch]);

  return <>{state.data ? <PokedexON /> : <p>Cargando...</p>}</>;
};

export default PokeApi;
