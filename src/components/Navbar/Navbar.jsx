import './navbar.css';
import React, { useContext } from 'react';
import { pokeContext } from '../../hooks/context/pokeContext';
import { handleChange, handleSubmit } from '../../function/handleFunctions.js';
import { styleButtons } from '../../utils/buttons/style/styleButtons.js';
import Button from '../Button/Button.jsx';

const Navbar = () => {
  const { setinputPkmID, inputValue, setInputValue, playAudio } =
    useContext(pokeContext);

  return (
    <nav className="navbar">
      <input
        style={styleButtons}
        type="text"
        className="poke_input"
        onChange={(event) => {
          handleChange(event, setInputValue);
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleSubmit(inputValue, setinputPkmID, playAudio);
          }
        }}
      />
      <Button
        style={styleButtons}
        className={'submit_btn'}
        onClick={() => {
          handleSubmit(inputValue, setinputPkmID, playAudio);
        }}
        text={'Submit'}
      />
    </nav>
  );
};

export default Navbar;
