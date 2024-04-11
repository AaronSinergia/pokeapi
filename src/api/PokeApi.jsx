import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokemonChoosed from '../pages/components/PokemonChoosed/PokemonChoosed';

const PokeApi = ({ newPkm }) => {
  const [data, setData] = useState(null);
  const { pokemonName } = useParams();

  const pokemonWritedInInput = newPkm.toLowerCase();

  const defaultUrl = `https://pokeapi.co/api/v2/pokemon/bulbasaur`;

  const pokemonSelected = newPkm
    ? `https://pokeapi.co/api/v2/pokemon/${pokemonWritedInInput}`
    : pokemonName
    ? `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    : defaultUrl;

  useEffect(() => {
    fetch(pokemonSelected)
      .then((response) => {
        if (!response.ok) {
          throw new Error('La consulta realizada no es válida');
        }
        return response.json();
      })
      .then((apiData) => {
        setData(apiData);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        alert('No se ha encontrado ningún Pokemon con ese nombre');
      });
  }, [pokemonSelected]);

  return (
    <>
      {data ? (
        <>
          <PokemonChoosed pokemon={data} />
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};

export default PokeApi;
