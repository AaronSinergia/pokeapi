export const fetchFunction = async (url) => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('La consulta realizada no es válida');
      }
      return response.json();
    })
    .then((apiData) => {
      return apiData;
    })
    .catch((error) => {
      console.log(error);
      alert('No se ha encontrado ningún Pokemon');
      return Promise.reject(error);
    });
};
