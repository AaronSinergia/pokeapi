import './navbar.css';
import React, { useContext } from 'react';
import { pokeContext } from '../../context/pokeContext';
import {
  handleChange,
  handleClickAndSound,
  handleSubmit,
} from '../../function/handleFunctions.js';
import { styleButtons } from '../../utils/buttons/style/styleButtons.js';
import Button from '../Button/Button.jsx';

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
      <Button
        style={styleButtons}
        className={'submit_btn'}
        onClick={() => {
          handleSubmit(inputValue, setinputPkmID);
          handleClickAndSound();
        }}
        text={'Submit'}
      />
    </nav>
  );
};

export default Navbar;
