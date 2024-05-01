export const fetchLastPkmn = (url, setPokemon) => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('La consulta realizada no es válida');
      }
      return response.json();
    })
    .then((data) => {
      const lastPokemon = data.results[data.results.length - 1];
      const lastPokemonId = lastPokemon.url.split('/').slice(-2)[0];
      setPokemon(parseInt(lastPokemonId));
    })
    .catch((error) => {
      console.log(error);
      alert('No se ha podido obtener el último Pokemon');
    });
};
