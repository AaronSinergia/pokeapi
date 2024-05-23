import React from 'react';
import './PokeTitle.css';

const PokeTitle = () => {
  return (
    <>
      <div className="poke_title_div">
        <img src="./assets/pokedex_title.png" alt="pokedex_title" />
        <img src="./assets/pokedex_subtitle.png" alt="pokedex_subtitle" />
      </div>
    </>
  );
};

export default PokeTitle;
