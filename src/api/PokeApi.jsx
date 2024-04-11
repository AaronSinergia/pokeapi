import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokemonChoosed from '../pages/components/PokemonChoosed/PokemonChoosed';

const PokeApi = ({ inputValue }) => {
  const [data, setData] = useState(null);
  const { pokemonName } = useParams();

  console.log(inputValue);

  const defaultUrl = `https://pokeapi.co/api/v2/pokemon/bulbasaur`;

  const pokemonSelected = pokemonName
    ? `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    : defaultUrl;

  useEffect(() => {
    fetch(pokemonSelected)
      .then((response) => {
        if (!response.ok) {
          alert('No se ha encontrado ningún Pokemon con ese nombre');
          throw new Error('La consulta realizada no es válida');
        }
        return response.json();
      })
      .then((apiData) => {
        setData(apiData);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, []);

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
