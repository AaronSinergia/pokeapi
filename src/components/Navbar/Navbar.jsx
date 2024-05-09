import './navbar.css';
import React, { useContext } from 'react';
import { pokeContext } from '../../context/pokeContext';
import {
  handleChange,
  handleClickAndSound,
  handleSubmit,
} from '../../function/handleFunctions.js';
import { styleButtons } from '../../utils/buttons/style/styleButtons.js';

const Navbar = () => {
  const { setinputPkmID, inputValue, setInputValue } = useContext(pokeContext);

  return (
    <nav className="navbar">
      <input
        style={styleButtons}
        type="text"
        className="poke_input"
        onChange={(event) => handleChange(event, setInputValue)}
      />
      <button
        style={styleButtons}
        className="submit_btn"
        onClick={() => {
          handleSubmit(inputValue, setinputPkmID);
          handleClickAndSound();
        }}
      >
        Submit
      </button>
    </nav>
  );
};

export default Navbar;
