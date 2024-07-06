import React, { useContext, useEffect } from 'react';
import './WinnerResult.css';
import { pokeContext } from '../../hooks/context/pokeContext';
import { styleButtons } from '../../utils/buttons/style/styleButtons';
import H3Comp from '../H3Comp/H3Comp';

const WinnerResult = () => {
  const { comparisionResult, showWinner, setShowWinner } =
    useContext(pokeContext);

  useEffect(() => {
    setShowWinner(false);
    const timerId = setTimeout(() => {
      setShowWinner(comparisionResult);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [comparisionResult]);

  return (
    <div className="winner_div">
      {showWinner ? (
        <H3Comp
          className={'title_winner'}
          style={styleButtons}
          text={showWinner}
        />
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
