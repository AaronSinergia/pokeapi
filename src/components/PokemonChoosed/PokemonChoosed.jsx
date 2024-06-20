// import React, { useCallback, useContext, useEffect } from 'react';
// import './PokemonChoosed.css';
// import PokedexIMG from '../PokedexIMG/PokedexIMG';
// import Backnextbtn from '../Backnextbtn/Backnextbtn';
// import { pokeContext } from '../../context/pokeContext';
// import Navbar from '../Navbar/Navbar';
// import {
//   handleClickAndSound,
//   handleImageClick,
//   handleStopFight,
// } from '../../function/handleFunctions';
// import { comparePokemonTypes } from '../../function/comparePokemonTypes';

// import PokemonWinner from '../PokemonWinner/PokemonWinner';
// import PokemonEnemyInfo from '../PokemonEnemyInfo/PokemonEnemyInfo';
// import Mutebttn from '../Mutebttn/Mutebttn';
// import PokemonTitleName from '../PokemonTitleName/PokemonTitleName';
// import PokemonTypeInfo from '../PokemonTypeInfo/PokemonTypeInfo';
// import { PokemonSpriteIMG } from '../PokemonSpriteIMG/PokemonSpriteIMG';
// import PokemonVSTitle from '../PokemonVSTitle/PokemonVSTitle';
// import StopFightBTN from '../StopFightBTN/StopFightBTN';
// import SpriteNotFound from '../SpriteNotFound/SpriteNotFound';
// import Button from '../Button/Button';

// const PokemonChoosed = () => {
//   const {
//     data,
//     pokemonFighterData,
//     setPokemonFighter,
//     setRandomID,
//     setPokemonFighterData,
//     setComparisionResult,
//     musicOff,
//   } = useContext(pokeContext);

//   const clickInIMG = useCallback(
//     (ev) => {
//       handleImageClick(ev, setPokemonFighter, setRandomID, musicOff);
//     },
//     [setPokemonFighter, setRandomID]
//   );

//   const clickInSTOPBTN = useCallback(() => {
//     handleStopFight(setPokemonFighter, setPokemonFighterData);
//   }, [setPokemonFighter, setPokemonFighterData]);

//   useEffect(() => {
//     if (pokemonFighterData) {
//       const pokemonChoosedToFight = data.types[0].type.name;
//       const pokemonRandomToFight = pokemonFighterData.types[0].type.name;

//       comparePokemonTypes(pokemonChoosedToFight, pokemonRandomToFight)
//         .then((comparisionResult) => {
//           setComparisionResult(comparisionResult);
//         })
//         .catch((error) => {
//           console.error('Error with comparision:', error);
//         });

//       const onoffButtonDisabled = document.querySelector('.onoff_div');
//       onoffButtonDisabled.style.zIndex = -1;

//       const fight_sound = document.getElementById('fight_sound');
//       const start_sound = document.getElementById('start_sound');
//       let navigateButtons = document.querySelector('.pokenavigate_btns');
//       let navbar = document.querySelector('.navbar');

//       fight_sound.play();
//       start_sound.pause();

//       const pokemonRandomEnemy = document.querySelector('.pkmn_random_enemy');
//       if (pokemonRandomEnemy) {
//         pokemonRandomEnemy.style.display = 'flex';
//       }

//       if (navigateButtons) {
//         navigateButtons.style.display = 'none';
//       }
//       if (navbar) {
//         navbar.style.display = 'none';
//       }

//       const textWinnerPkmn = document.querySelector('.title_winner');
//       textWinnerPkmn.style.display = 'flex';

//       // WHEN FIGHT SOUND FINISHED
//       fight_sound.addEventListener('ended', () => {
//         setPokemonFighter(false);
//         setPokemonFighterData(null);

//         const yourPokemonType = document.querySelector('.pokemon_type');
//         yourPokemonType.style.marginTop = '90px';

//         const onoffButtonDisabled = document.querySelector('.onoff_div');
//         onoffButtonDisabled.style.zIndex = 1;

//         const textWinnerPkmn = document.querySelector('.title_winner');
//         textWinnerPkmn.style.display = 'none';

//         const pkmnGoToFight = document.querySelector('.pkmn_goto_fight');
//         if (pkmnGoToFight) {
//           pkmnGoToFight.className = 'pokemon_img';
//           pkmnGoToFight.style.filter = 'sepia(0%)';
//         }

//         const pokemonRandomEnemy = document.querySelector('.pkmn_random_enemy');
//         if (pokemonRandomEnemy) {
//           pokemonRandomEnemy.style.display = 'none';
//         }
//         navigateButtons.style.display = 'flex';
//         navbar.style.display = 'flex';

//         start_sound.loop = true;
//         start_sound.play();
//       });
//     }
//   }, [pokemonFighterData, data]);

//   return (
//     <>
//       <div className="pkmn_choosed">
//         <Mutebttn />
//         <PokedexIMG />
//         <Navbar />
//         <section className="text_info">
//           <PokemonTitleName
//             className={'pokemon_titlename'}
//             titleName={data.name}
//           />
//           <PokemonTypeInfo
//             className={'pokemon_type'}
//             pokemonType={data.types[0].type.name}
//           />
//         </section>
//         <div className="div_pkm_img">
//           {pokemonFighterData?.sprites ? (
//             <>
//               <PokemonSpriteIMG
//                 className={'pkmn_random_enemy'}
//                 onClick={clickInIMG}
//                 src={pokemonFighterData.sprites.front_default}
//                 alt={pokemonFighterData.name}
//               />
//               <PokemonVSTitle className={'pokemon_vs_title'} text={'vs'} />
//               <PokemonEnemyInfo />
//               <StopFightBTN
//                 className={'stop_fight'}
//                 text={'STOP FIGHT'}
//                 onClick={() => {
//                   clickInSTOPBTN();
//                   handleClickAndSound();
//                 }}
//                 <Button
//                 onClick={() => {
//                   clickInSTOPBTN();
//                   handleClickAndSound();
//                 }}
//                 style={styleButtons}
//                 className={'stop_fight'}
//                 text={'STOP FIGHT'}
//               />
//             </>
//           ) : null}

//           {data.sprites.front_default ? (
//             <PokemonSpriteIMG
//               className={'pokemon_img'}
//               onClick={clickInIMG}
//               src={data.sprites.front_default}
//               alt={data.name}
//             />
//           ) : (
//             <SpriteNotFound
//             src={"./assets/no-image-icon-4.png"}
//             className={"pokemon_img"}
//              />

//           )}
//         </div>
//         <PokemonWinner />
//         <Backnextbtn />
//       </div>
//     </>
//   );
// };

// export default PokemonChoosed;

import React, { useCallback, useContext } from 'react';
import './PokemonChoosed.css';
import PokedexIMG from '../PokedexIMG/PokedexIMG';
import Backnextbtn from '../Backnextbtn/Backnextbtn';
import { pokeContext } from '../../context/pokeContext';
import Navbar from '../Navbar/Navbar';
import {
  handleClickAndSound,
  handleImageClick,
  handleStopFight,
} from '../../function/handleFunctions';
import PokemonWinner from '../PokemonWinner/PokemonWinner';
import PokemonEnemyInfo from '../PokemonEnemyInfo/PokemonEnemyInfo';
import Mutebttn from '../Mutebttn/Mutebttn';
import PokemonTitleName from '../PokemonTitleName/PokemonTitleName';
import PokemonTypeInfo from '../PokemonTypeInfo/PokemonTypeInfo';
import { PokemonSpriteIMG } from '../PokemonSpriteIMG/PokemonSpriteIMG';
import PokemonVSTitle from '../PokemonVSTitle/PokemonVSTitle';
import startPokemonFight from '../../function/StartPokemonFight/startPokemonFight';
import { styleButtons } from '../../utils/buttons/style/styleButtons';
import Button from '../Button/Button';

const PokemonChoosed = () => {
  const {
    data,
    pokemonFighterData,
    setPokemonFighter,
    setRandomID,
    setPokemonFighterData,
    setComparisionResult,
    musicOff,
  } = useContext(pokeContext);

  const clickInIMG = useCallback(
    (ev) => {
      handleImageClick(ev, setPokemonFighter, setRandomID, musicOff);
    },
    [setPokemonFighter, setRandomID]
  );

  const clickInSTOPBTN = useCallback(() => {
    handleStopFight(setPokemonFighter, setPokemonFighterData);
  }, [setPokemonFighter, setPokemonFighterData]);

  startPokemonFight(
    pokemonFighterData,
    data,
    setComparisionResult,
    setPokemonFighter,
    setPokemonFighterData
  );

  return (
    <>
      <div className="pkmn_choosed">
        <Mutebttn />
        <PokedexIMG />
        <Navbar />
        <section className="text_info">
          <PokemonTitleName
            className={'pokemon_titlename'}
            titleName={data.name}
          />
          <PokemonTypeInfo
            className={'pokemon_type'}
            pokemonType={data.types[0].type.name}
          />
        </section>
        <div className="div_pkm_img">
          {pokemonFighterData?.sprites ? (
            <>
              <PokemonSpriteIMG
                className={'pkmn_random_enemy'}
                onClick={clickInIMG}
                src={pokemonFighterData.sprites.front_default}
                alt={pokemonFighterData.name}
              />
              <PokemonVSTitle className={'pokemon_vs_title'} text={'vs'} />
              <PokemonEnemyInfo />
              <Button
                className={'stop_fight'}
                text={'STOP FIGHT'}
                onClick={() => {
                  clickInSTOPBTN();
                  handleClickAndSound();
                }}
                style={styleButtons}
              />
            </>
          ) : null}

          {data.sprites.front_default ? (
            <PokemonSpriteIMG
              className={'pokemon_img'}
              onClick={clickInIMG}
              src={data.sprites.front_default}
              alt={data.name}
            />
          ) : (
            <PokemonSpriteIMG
              className={'pokemon_img'}
              src={'./assets/no-image-icon-4.png'}
              alt={data.name}
            />
          )}
        </div>
        <PokemonWinner />
        <Backnextbtn />
      </div>
    </>
  );
};

export default PokemonChoosed;
