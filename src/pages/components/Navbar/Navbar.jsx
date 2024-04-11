import './navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PokeApi from '../../../api/PokeApi';

const Navbar = () => {
  const [showInput, setShowInput] = useState(false);

  const [inputValue, setInputValue] = useState('');

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  <PokeApi inputValue={inputValue} />;

  return (
    <nav>
      <ul className="ulnav">
        <li>
          <Link to="/">
            <button className="home_btn">PokeHome</button>
          </Link>
        </li>
        <li>
          {showInput ? (
            <input type="text" className="poke_input" onChange={handleChange} />
          ) : (
            <button className="search_btn" onClick={toggleInput}>
              PokeSearch
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
