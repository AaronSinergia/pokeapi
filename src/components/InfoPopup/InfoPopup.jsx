import './InfoPopup.scss';
import React, { useEffect, useContext } from 'react';
import { pokeContext } from '../../hooks/context/pokeContext';
import { helpMessages } from '../../utils/systemMessages/helpMessages';
import H3Comp from '../H3Comp/H3Comp';

const InfoPopup = () => {
  const { state, dispatch } = useContext(pokeContext);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({
        type: 'SET_CURRENT_MESSAGE_INDEX',
        payload: (state.currentMessageIndex + 1) % helpMessages.length,
      });
    }, 9000);

    return () => clearInterval(interval);
  }, [dispatch, state.currentMessageIndex]);

  return (
    <div className={!state.showPokeApi ? 'nodisplayed_div_popup' : 'div_popup'}>
      {helpMessages.map((message, index) => (
        <H3Comp
          key={index}
          className={`info_popup ${
            index === state.currentMessageIndex ? 'visible' : 'hidden'
          }`}
          text={
            index === state.currentMessageIndex && (
              <span className="typewriter">{message}</span>
            )
          }
        />
      ))}
      <img src="./assets/sprite_pkmn.png" alt="sprite_pkmn" />
    </div>
  );
};

export default InfoPopup;
