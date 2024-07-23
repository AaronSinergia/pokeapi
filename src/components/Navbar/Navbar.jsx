import './navbar.scss';
import React, { useContext } from 'react';
import { pokeContext } from '../../hooks/context/pokeContext';
import { handleChange, handleSubmit } from '../../function/handleFunctions.js';
import { styleButtons } from '../../utils/buttons/style/styleButtons.js';
import Button from '../Button/Button.jsx';

const Navbar = () => {
  const { state, dispatch } = useContext(pokeContext);

  return (
    <nav
      style={
        state.pokemonFighterData ? { display: 'none' } : { display: 'flex' }
      }
      className="navbar"
    >
      <input
        style={styleButtons}
        type="text"
        className="poke_input"
        onChange={(event) => {
          handleChange(event, (value) =>
            dispatch({ type: 'SET_INPUT_VALUE', payload: value })
          );
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleSubmit(state.inputValue, (value) =>
              dispatch({ type: 'SET_INPUT_PKM_ID', payload: value })
            );
          }
        }}
      />
      <Button
        style={styleButtons}
        className={'submit_btn'}
        onClick={() => {
          handleSubmit(state.inputValue, (value) =>
            dispatch({ type: 'SET_INPUT_PKM_ID', payload: value })
          );
        }}
        text={'Submit'}
      />
    </nav>
  );
};

export default Navbar;
