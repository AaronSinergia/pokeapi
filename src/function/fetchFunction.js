export const fetchFunction = (url, setData) => {
  fetch(url)
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
      console.log(error);
      alert('No se ha encontrado ningún Pokemon con ese nombre');
    });
};
