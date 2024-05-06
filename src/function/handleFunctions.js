export const handleReload = () => {
  window.location.href = '/';
};

export const toggleInput = (showInput, setShowInput) => {
  setShowInput(!showInput);
};

export const handleChange = (event, setInputValue) => {
  setInputValue(event.target.value);
};

export const handleSubmit = (inputValue, setinputPkmID) => {
  setinputPkmID(inputValue.toLowerCase());
};
