import './navbar.css';
import React, { useContext } from 'react';
import { styleInputs } from '../../utils/buttons/style/styleInputs';
import { styleSbmtBtns } from '../../utils/buttons/style/styleSbmtBtns';
import { pokeContext } from '../../context/pokeContext';
import { handleChange, handleSubmit } from '../../function/handleFunctions.js';

const Navbar = () => {
  const { setinputPkmID, inputValue, setInputValue } = useContext(pokeContext);

  return (
    <nav className="navbar">
      <input
        style={styleInputs}
        type="text"
        className="poke_input"
        onChange={(event) => handleChange(event, setInputValue)}
      />
      <button
        style={styleSbmtBtns}
        className="submit_btn"
        onClick={() => handleSubmit(inputValue, setinputPkmID)}
      >
        Submit
      </button>
    </nav>
  );
};

export default Navbar;
