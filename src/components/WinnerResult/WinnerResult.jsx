import React, { useContext } from 'react';
import './WinnerResult.scss';
import { pokeContext } from '../../hooks/context/pokeContext';
import { styleButtons } from '../../utils/buttons/style/styleButtons';
import H3Comp from '../H3Comp/H3Comp';

const WinnerResult = () => {
  const { state } = useContext(pokeContext);

  return (
    <div
      style={state.comparisionResult ? { zIndex: 1 } : { zIndex: -1 }}
      className="winner_div"
    >
      {state.pokemonFighterData ? (
        <H3Comp className={'title_winner'} text={state.comparisionResult} />
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
