import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokemonChoosed from '../components/PokemonChoosed/PokemonChoosed';
import { fetchFunction } from '../function/fetchFunction';
import { pokeContext } from '../context/pokeContext';
import { fetchLastPkmn } from '../function/fetchLastPkmn';
import { default_POKEAPI_Url } from '../config/urls';

const PokeApi = ({ newPkm }) => {
  const [data, setData] = useState(null);
  const { pokemonName } = useParams();
  const { pokemon, setPokemon } = useContext(pokeContext);

  const adjustedMinPokemon = pokemon <= 0 ? -1 : pokemon;

  const pokemonWritedInSEARCHBAR = pokemonName ? pokemonName.toLowerCase() : '';

  const defaultAPI_URL = `${default_POKEAPI_Url}/${adjustedMinPokemon}`;
  const input_dom_API_URL = `${default_POKEAPI_Url}/${newPkm}`;

  const pokemonSelected = newPkm
    ? input_dom_API_URL
    : pokemonWritedInSEARCHBAR
    ? `https://pokeapi.co/api/v2/pokemon/${pokemonWritedInSEARCHBAR}`
    : defaultAPI_URL;

  useEffect(() => {
    if (adjustedMinPokemon < 0) {
      const lastPokemonUrl = `https://pokeapi.co/api/v2/pokemon?limit=10000`;
      fetchLastPkmn(lastPokemonUrl, setPokemon);
    } else {
      fetchFunction(pokemonSelected, setData);
    }
  }, [pokemon, pokemonSelected, setPokemon]);

  return (
    <>
      {data ? (
        <>
          <PokemonChoosed data={data} />
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
