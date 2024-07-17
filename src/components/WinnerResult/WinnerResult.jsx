import React, { useContext, useEffect } from 'react';
import './WinnerResult.css';
import { pokeContext } from '../../hooks/context/pokeContext';
import { styleButtons } from '../../utils/buttons/style/styleButtons';
import H3Comp from '../H3Comp/H3Comp';

const WinnerResult = () => {
  const { pokemonFighterData, comparisionResult } = useContext(pokeContext);

  return (
    <div
      style={comparisionResult ? { zIndex: 1 } : { zIndex: -1 }}
      className="winner_div"
    >
      {pokemonFighterData ? (
        <H3Comp className={'title_winner'} text={comparisionResult} />
      ) : (
        <H3Comp
          className={'title_winner'}
          style={styleButtons}
          text={'Waiting.............'}
        />
      )}
    </div>
  );
};

export default WinnerResult;
