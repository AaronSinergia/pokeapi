- revisar estilos de onoff y en general dejar bonito

import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokemonChoosed from '../components/PokemonChoosed/PokemonChoosed';
import { fetchFunction } from '../function/fetchFunction';
import { pokeContext } from '../context/pokeContext';
import { default_POKEAPI_Url } from '../config/urls';

const PokeApi = () => {
const { pokemonName } = useParams();
const { pokemon, setPokemon, data, setData, inputPkmID } =
useContext(pokeContext);

const default_API_URL = `${default_POKEAPI_Url}/${pokemon}`;

const input_API_URL = `${default_POKEAPI_Url}/${inputPkmID}`;

const pokemonWritedInSEARCHBAR = pokemonName ? pokemonName.toLowerCase() : '';

const search_bar_API_URL = `${default_POKEAPI_Url}/${pokemonWritedInSEARCHBAR}`;

const selectedURL = search_bar_API_URL
? search_bar_API_URL
: input_API_URL
? input_API_URL
: default_API_URL;

useEffect(() => {
fetchFunction(selectedURL, setData, setPokemon);
}, [pokemon, default_API_URL, inputPkmID, pokemonWritedInSEARCHBAR]);

// useEffect(() => {
// if (inputPkmID) {
// fetch(`${default_POKEAPI_Url}/${inputPkmID}`)
// .then((response) => {
// if (!response.ok) {
// throw new Error('La consulta realizada no es válida');
// }
// return response.json();
// })
// .then((apiData) => {
// setPokemon(apiData.id);
// })
// .catch((error) => {
// console.log(error);
// alert('No se ha encontrado ningún Pokemon con ese nombre');
// });
// }
// }, [inputPkmID]);

// useEffect(() => {
// if (pokemonName) {
// fetch(`${default_POKEAPI_Url}/${pokemonWritedInSEARCHBAR}`)
// .then((response) => {
// if (!response.ok) {
// throw new Error('La consulta realizada no es válida');
// }
// return response.json();
// })
// .then((apiData) => {
// setPokemon(apiData.id);
// })
// .catch((error) => {
// console.log(error);
// alert('No se ha encontrado ningún Pokemon con ese nombre');
// });
// }
// }, [pokemonWritedInSEARCHBAR]);

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
