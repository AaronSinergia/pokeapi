export const fetchFunction = (url, setData, setPokemon) => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('La consulta realizada no es válida');
      }
      return response.json();
    })
    .then((apiData) => {
      if (setData) {
        setData(apiData);
      }
      if (setPokemon) {
        setPokemon(apiData.id);
      }
    })
    .catch((error) => {
      console.log(error);
      alert('No se ha encontrado ningún Pokemon');
    });
};
