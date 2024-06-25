import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
      <div className="poke_title_div">
        <img src="./assets/pokedex_title.png" alt="pokedex_title" />
        <img src="./assets/pokedex_subtitle.png" alt="pokedex_subtitle" />
      </div>
    </>
  );
};

export default Header;
