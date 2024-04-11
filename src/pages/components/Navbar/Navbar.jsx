import './navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ setNewPkm }) => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setNewPkm(inputValue);
  };

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
            <div>
              <input
                type="text"
                className="poke_input"
                onChange={handleChange}
              />
              <button className="submit_btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
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
