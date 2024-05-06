import './navbar.css';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { styleButtons } from '../../utils/buttons/style/styleButtons';
import { styleInputs } from '../../utils/buttons/style/styleInputs';
import { styleSbmtBtns } from '../../utils/buttons/style/styleSbmtBtns';
import { pokeContext } from '../../context/pokeContext';
import {
  handleChange,
  handleReload,
  handleSubmit,
  toggleInput,
} from '../../function/handleFunctions.js';

const Navbar = () => {
  const [showInput, setShowInput] = useState(false);
  const { setinputPkmID, inputValue, setInputValue } = useContext(pokeContext);

  return (
    <nav className="navbar">
      <ul className="ulnav">
        <li>
          <Link to="/">
            <button
              style={styleButtons}
              className="home_btn"
              onClick={handleReload}
            >
              PokeHome
            </button>
          </Link>
        </li>

        <li>
          {showInput ? (
            <div>
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
            </div>
          ) : (
            <button
              style={styleButtons}
              className="search_btn"
              onClick={() => toggleInput(showInput, setShowInput)}
            >
              PokeSearch
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
