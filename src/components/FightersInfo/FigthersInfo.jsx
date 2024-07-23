import './FightersInfo.scss';
import React, { useCallback, useContext, useEffect } from 'react';
import { SpriteIMG } from '../SpriteIMG/SpriteIMG';
import {
  handleImageClick,
  handleStopFight,
  handleMainPkmnClicked,
  handleStyleOponentPkmnClicked,
  styleTextMainPKMN,
  styleTextOponentPKMN,
} from '../../function/handleFunctions';
import Button from '../Button/Button';
import { pokeContext } from '../../hooks/context/pokeContext';
import { styleButtons } from '../../utils/buttons/style/styleButtons';
import H3Comp from '../H3Comp/H3Comp';
import { comparePokemonTypes } from '../../function/comparePokemonTypes';

const FightersInfo = () => {
  const { state, dispatch, playAudio, pauseAudio } = useContext(pokeContext);

  const clickInIMG = useCallback(() => {
    handleImageClick(
      (value) => dispatch({ type: 'SET_POKEMON_FIGHTER', payload: value }),
      (value) => dispatch({ type: 'SET_RANDOM_ID', payload: value }),
      (value) => dispatch({ type: 'SET_SHOW_GIF', payload: value }),
      playAudio,
      pauseAudio
    );
  }, [dispatch, playAudio, pauseAudio]);

  useEffect(() => {
    if (state.pokemonFighterData) {
      const pokemonChoosedToFight = state.data.types[0].type.name;
      const pokemonRandomToFight = state.pokemonFighterData.types[0].type.name;

      comparePokemonTypes(
        pokemonChoosedToFight,
        pokemonRandomToFight,
        playAudio,
        pauseAudio
      )
        .then((comparisionResult) => {
          dispatch({
            type: 'SET_COMPARISION_RESULT',
            payload: comparisionResult,
          });
        })
        .catch((error) => {
          console.error('Error with comparision:', error);
        });
    }
  }, [state.pokemonFighterData, state.data, dispatch, playAudio, pauseAudio]);

  const clickInSTOPBTN = useCallback(() => {
    handleStopFight(
      (value) => dispatch({ type: 'SET_COMPARISION_RESULT', payload: value }),
      (value) => dispatch({ type: 'SET_POKEMON_FIGHTER', payload: value }),
      (value) => dispatch({ type: 'SET_POKEMON_FIGHTER_DATA', payload: value }),
      playAudio,
      pauseAudio
    );
  }, [dispatch, playAudio, pauseAudio]);

  return (
    <>
      {state.showGif && (
        <img
          className="loading_gif"
          src="../../../public/assets/gifs/gif_fight.gif"
          alt="Loading"
        />
      )}
      <section
        className={
          !state.pokemonFighter ? 'your_fighter_info' : 'active_fighter_info'
        }
      >
        {state.data.sprites.front_default ? (
          <SpriteIMG
            style={handleMainPkmnClicked(
              state.pokemonFighterData,
              state.comparisionResult
            )}
            className={
              state.pokemonFighterData ? 'pkmn_goto_fight' : 'pokemon_img'
            }
            onClick={state.pokemonFighterData ? null : clickInIMG}
            src={state.data.sprites.front_default}
            alt={state.data.name}
          />
        ) : (
          <SpriteIMG
            style={
              state.comparisionResult === 'YOU WIN!!!!! 😎'
                ? { animation: 'zoom-effect 2s infinite' }
                : { animation: 'none' }
            }
            className={
              state.pokemonFighterData ? 'pkmn_goto_fight' : 'pokemon_img'
            }
            src={'./assets/no-image-icon-4.png'}
            alt={state.data.name}
          />
        )}
        <H3Comp
          style={styleTextMainPKMN(state.comparisionResult)}
          className={'titlename_pkmn_h3'}
          text={state.data.name}
        />
        <H3Comp
          style={styleTextMainPKMN(state.comparisionResult)}
          className={'type_pkmn_h3'}
          text={`TYPE: ${state.data.types[0].type.name}`}
        />
      </section>

      <section className={'enemy_fighter_info'}>
        {state.pokemonFighterData?.sprites ? (
          <>
            <SpriteIMG
              style={handleStyleOponentPkmnClicked(state.comparisionResult)}
              className={'pkmn_random_enemy'}
              src={state.pokemonFighterData.sprites.front_default}
              alt={state.pokemonFighterData.name}
            />
            <H3Comp className={'pokemon_vs_title'} text={'vs'} />
            <H3Comp
              style={styleTextOponentPKMN(state.comparisionResult)}
              className={'titlename_pkmn_h3 titlename_enemy_h3'}
              text={state.pokemonFighterData.name}
            />
            <H3Comp
              style={styleTextOponentPKMN(state.comparisionResult)}
              className={'type_pkmn_h3 type_enemy_h3'}
              text={`TYPE: ${state.pokemonFighterData.types[0].type.name}`}
            />
            <Button
              className={'stop_fight'}
              text={'STOP FIGHT'}
              onClick={clickInSTOPBTN}
              style={styleButtons}
            />
          </>
        ) : null}
      </section>
    </>
  );
};

export default FightersInfo;
