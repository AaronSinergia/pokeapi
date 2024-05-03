import './navbar.css';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { styleButtons } from '../../utils/buttons/style/styleButtons';
import { styleInputs } from '../../utils/buttons/style/styleInputs';
import { styleSbmtBtns } from '../../utils/buttons/style/styleSbmtBtns';
import { pokeContext } from '../../context/pokeContext';

const Navbar = () => {
  const [showInput, setShowInput] = useState(false);
  const {
    setinputPkmID,
    inputValue,
    setInputValue,
    showPokeApi,
    setShowPokeApi,
  } = useContext(pokeContext);

  const toggleInput = () => {
    setShowInput(!showInput);
    const onBtnClicked = document.querySelector('.on_title');
    onBtnClicked.innerHTML = 'ON';
    setShowPokeApi(!showPokeApi);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setinputPkmID(inputValue.toLocaleLowerCase());
  };

  const handleReload = () => {
    window.location.href = '/';
  };

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
                onChange={handleChange}
              />
              <button
                style={styleSbmtBtns}
                className="submit_btn"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          ) : (
            <button
              style={styleButtons}
              className="search_btn"
              onClick={toggleInput}
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
