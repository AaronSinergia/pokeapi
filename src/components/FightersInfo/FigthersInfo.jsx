import React, { useCallback, useContext, useEffect } from 'react';
import './FightersInfo.css';
import { SpriteIMG } from '../SpriteIMG/SpriteIMG';
import {
  handleImageClick,
  handleStopFight,
} from '../../function/handleFunctions';
import Button from '../Button/Button';
import { pokeContext } from '../../hooks/context/pokeContext';
import { styleButtons } from '../../utils/buttons/style/styleButtons';
import H3Comp from '../H3Comp/H3Comp';

import { comparePokemonTypes } from '../../function/comparePokemonTypes';

const FightersInfo = () => {
  const {
    data,
    pokemonFighterData,
    pokemonFighter,
    setPokemonFighter,
    setRandomID,
    setPokemonFighterData,
    playAudio,
    pauseAudio,
    comparisionResult,
    setComparisionResult,
    showGif,
    setShowGif,
  } = useContext(pokeContext);

  const clickInIMG = useCallback(() => {
    handleImageClick(
      setComparisionResult,
      setPokemonFighter,
      setRandomID,
      playAudio,
      pauseAudio,
      setShowGif
    );
  }, [setRandomID, setComparisionResult]);

  useEffect(() => {
    if (pokemonFighterData) {
      const pokemonChoosedToFight = data.types[0].type.name;
      const pokemonRandomToFight = pokemonFighterData.types[0].type.name;

      comparePokemonTypes(
        pokemonChoosedToFight,
        pokemonRandomToFight,
        playAudio,
        pauseAudio
      )
        .then((comparisionResult) => {
          setComparisionResult(comparisionResult);
        })
        .catch((error) => {
          console.error('Error with comparision:', error);
        });
    }
  }, [
    pokemonFighterData,
    data,
    setComparisionResult,
    setPokemonFighter,
    setPokemonFighterData,
  ]);

  const clickInSTOPBTN = useCallback(() => {
    handleStopFight(
      setComparisionResult,
      setPokemonFighter,
      setPokemonFighterData,
      playAudio,
      pauseAudio
    );
  }, [setPokemonFighter, setPokemonFighterData]);

  const handleMainPkmnClicked = {
    animation:
      pokemonFighterData && comparisionResult === 'YOU WIN!!!!! 😎'
        ? 'zoom-effect 2s infinite'
        : 'none',
    filter:
      pokemonFighterData && comparisionResult === 'ENEMY WINS! 😫'
        ? 'grayscale(100%)'
        : 'grayscale(0%)',
  };

  const handleOponentPkmnClicked = {
    animation:
      comparisionResult === 'ENEMY WINS! 😫'
        ? 'zoom-effect 2s infinite'
        : 'none',
    filter:
      comparisionResult === 'YOU WIN!!!!! 😎'
        ? 'grayscale(100%)'
        : 'grayscale(0%)',
  };

  const styleTextMainPKMN = {
    color:
      !comparisionResult || comparisionResult === 'YOU WIN!!!!! 😎'
        ? 'white'
        : 'rgba(223, 53, 53, 0.203)',
    filter:
      comparisionResult === 'YOU WIN!!!!! 😎'
        ? 'grayscale(0%)'
        : 'grayscale(100%)',
  };

  const styleTextOponentPKMN = {
    color:
      !comparisionResult || comparisionResult === 'ENEMY WINS! 😫'
        ? 'white'
        : 'rgba(223, 53, 53, 0.203)',
    filter:
      comparisionResult === 'ENEMY WINS! 😫'
        ? 'grayscale(0%)'
        : 'grayscale(100%)',
  };

  return (
    <>
      {showGif && (
        <img
          className="loading_gif"
          src="../../../public/assets/gifs/gif_fight.gif"
          alt="Loading"
        />
      )}
      <section
        className={
          !pokemonFighter ? 'your_fighter_info' : 'active_fighter_info'
        }
      >
        {data.sprites.front_default ? (
          <SpriteIMG
            style={handleMainPkmnClicked}
            className={pokemonFighterData ? 'pkmn_goto_fight' : 'pokemon_img'}
            onClick={pokemonFighterData ? null : clickInIMG}
            src={data.sprites.front_default}
            alt={data.name}
          />
        ) : (
          <SpriteIMG
            style={
              comparisionResult === 'YOU WIN!!!!! 😎'
                ? { animation: 'zoom-effect 2s infinite' }
                : { animation: 'none' }
            }
            className={pokemonFighterData ? 'pkmn_goto_fight' : 'pokemon_img'}
            src={'./assets/no-image-icon-4.png'}
            alt={data.name}
          />
        )}
        <H3Comp
          style={styleTextMainPKMN}
          className={'titlename_pkmn_h3'}
          text={data.name}
        />
        <H3Comp
          style={styleTextMainPKMN}
          className={'type_pkmn_h3'}
          text={`TYPE: ${data.types[0].type.name}`}
        />
      </section>

      <section className={'enemy_fighter_info'}>
        {pokemonFighterData?.sprites ? (
          <>
            <SpriteIMG
              style={handleOponentPkmnClicked}
              className={'pkmn_random_enemy'}
              src={pokemonFighterData.sprites.front_default}
              alt={pokemonFighterData.name}
            />
            <H3Comp className={'pokemon_vs_title'} text={'vs'} />
            <H3Comp
              style={styleTextOponentPKMN}
              className={'titlename_pkmn_h3 titlename_enemy_h3'}
              text={pokemonFighterData.name}
            />
            <H3Comp
              style={styleTextOponentPKMN}
              className={'type_pkmn_h3 type_enemy_h3'}
              text={`TYPE: ${pokemonFighterData.types[0].type.name}`}
            />
            <Button
              className={'stop_fight'}
              text={'STOP FIGHT'}
              onClick={() => {
                clickInSTOPBTN(playAudio, pauseAudio);
              }}
              style={styleButtons}
            />
          </>
        ) : null}
      </section>
    </>
  );
};

export default FightersInfo;
