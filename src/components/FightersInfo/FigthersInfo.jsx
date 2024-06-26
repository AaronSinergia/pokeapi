import React, { useCallback, useContext } from 'react';
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

const FightersInfo = () => {
  const {
    data,
    pokemonFighterData,
    setPokemonFighter,
    setRandomID,
    setPokemonFighterData,
    playAudio,
    pauseAudio,
  } = useContext(pokeContext);

  const clickInIMG = useCallback(
    (ev) => {
      handleImageClick(ev, setPokemonFighter, setRandomID, playAudio);
    },
    [setPokemonFighter, setRandomID]
  );

  const clickInSTOPBTN = useCallback(
    (playAudio, pauseAudio) => {
      handleStopFight(
        setPokemonFighter,
        setPokemonFighterData,
        playAudio,
        pauseAudio
      );
    },
    [setPokemonFighter, setPokemonFighterData]
  );

  return (
    <>
      <section className={'your_fighter_info'}>
        {data.sprites.front_default ? (
          <SpriteIMG
            className={'pokemon_img'}
            onClick={clickInIMG}
            src={data.sprites.front_default}
            alt={data.name}
          />
        ) : (
          <SpriteIMG
            className={'pokemon_img'}
            src={'./assets/no-image-icon-4.png'}
            alt={data.name}
          />
        )}
        <H3Comp className={'titlename_pkmn_h3'} text={data.name} />
        <H3Comp
          className={'type_pkmn_h3'}
          text={`TYPE: ${data.types[0].type.name}`}
        />
      </section>

      <section className={'enemy_fighter_info'}>
        {pokemonFighterData?.sprites ? (
          <>
            <SpriteIMG
              className={'pkmn_random_enemy'}
              src={pokemonFighterData.sprites.front_default}
              alt={pokemonFighterData.name}
            />

            <H3Comp className={'pokemon_vs_title'} text={'vs'} />
            <H3Comp
              className={'titlename_pkmn_h3 titlename_enemy_h3'}
              text={pokemonFighterData.name}
            />
            <H3Comp
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
