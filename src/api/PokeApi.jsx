import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokemonChoosed from '../components/PokemonChoosed/PokemonChoosed';
import { fetchFunction } from '../function/fetchFunction';

const PokeApi = ({ newPkm }) => {
  const [data, setData] = useState(null);
  const { pokemonName } = useParams();

  const pokemonWritedInSEARCHBAR = pokemonName ? pokemonName.toLowerCase() : '';

  const defaultUrl = `https://pokeapi.co/api/v2/pokemon/bulbasaur`;

  const pokemonSelected = newPkm
    ? `https://pokeapi.co/api/v2/pokemon/${newPkm}`
    : pokemonWritedInSEARCHBAR
    ? `https://pokeapi.co/api/v2/pokemon/${pokemonWritedInSEARCHBAR}`
    : defaultUrl;

  useEffect(() => {
    fetchFunction(pokemonSelected, setData);
  }, [pokemonSelected]);

  return (
    <>
      {data ? (
        <>
          <PokemonChoosed pokemon={data} />
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
