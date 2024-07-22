import React, { useCallback, useContext, useEffect } from 'react';
import './FightersInfo.css';
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
  }, [
    setRandomID,
    setComparisionResult,
    playAudio,
    pauseAudio,
    setShowGif,
    setPokemonFighter,
  ]);

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
    playAudio,
    pauseAudio,
  ]);

  const clickInSTOPBTN = useCallback(() => {
    handleStopFight(
      setComparisionResult,
      setPokemonFighter,
      setPokemonFighterData,
      playAudio,
      pauseAudio
    );
  }, [
    setComparisionResult,
    setPokemonFighter,
    setPokemonFighterData,
    playAudio,
    pauseAudio,
  ]);

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
            style={handleMainPkmnClicked(pokemonFighterData, comparisionResult)}
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
          style={styleTextMainPKMN(comparisionResult)}
          className={'titlename_pkmn_h3'}
          text={data.name}
        />
        <H3Comp
          style={styleTextMainPKMN(comparisionResult)}
          className={'type_pkmn_h3'}
          text={`TYPE: ${data.types[0].type.name}`}
        />
      </section>

      <section className={'enemy_fighter_info'}>
        {pokemonFighterData?.sprites ? (
          <>
            <SpriteIMG
              style={handleStyleOponentPkmnClicked(comparisionResult)}
              className={'pkmn_random_enemy'}
              src={pokemonFighterData.sprites.front_default}
              alt={pokemonFighterData.name}
            />
            <H3Comp className={'pokemon_vs_title'} text={'vs'} />
            <H3Comp
              style={styleTextOponentPKMN(comparisionResult)}
              className={'titlename_pkmn_h3 titlename_enemy_h3'}
              text={pokemonFighterData.name}
            />
            <H3Comp
              style={styleTextOponentPKMN(comparisionResult)}
              className={'type_pkmn_h3 type_enemy_h3'}
              text={`TYPE: ${pokemonFighterData.types[0].type.name}`}
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
