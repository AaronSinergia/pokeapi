export const handleReload = () => {
  window.location.href = '/';
};

export const toggleInput = (
  showInput,
  setShowInput,
  showPokeApi,
  setShowPokeApi
) => {
  setShowInput(!showInput);
  const onBtnClicked = document.querySelector('.on_title');
  onBtnClicked.innerHTML = 'ON';
  setShowPokeApi(!showPokeApi);
};

export const handleChange = (event, setInputValue) => {
  setInputValue(event.target.value);
};

export const handleSubmit = (inputValue, setinputPkmID) => {
  setinputPkmID(inputValue.toLowerCase());
};
