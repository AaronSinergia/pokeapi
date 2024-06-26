export const handleReload = () => {
  window.location.href = '/';
};

export const handleChange = (event, setInputValue) => {
  setInputValue(event.target.value);
};

export const handleSubmit = (inputValue, setinputPkmID, playAudio) => {
  setinputPkmID(inputValue.toLowerCase());
  playAudio('click_sound');
};

export const handleStopMusic = (
  musicOff,
  setMusicOff,
  playAudio,
  pauseAudio
) => {
  setMusicOff(!musicOff);

  playAudio('click_sound');

  let musicOffLogo = document.querySelector('.mute_btn');
  let pokemonEnemy = document.querySelector('.pkmn_random_enemy');

  if (musicOff) {
    console.log('musica off');
    musicOffLogo.src = './assets/mute_logo.png';
    pauseAudio('start_sound');
    pauseAudio('fight_sound');
    pauseAudio('win_sound');
  } else {
    console.log('musica sonando!!');
    musicOffLogo.src = './assets/onSound_logo.png';

    if (pokemonEnemy) {
      playAudio('fight_sound');
    } else {
      playAudio('start_sound');
    }
  }
};

export const handleTogglePokeApi = (
  showPokeApi,
  setShowPokeApi,
  playAudio,
  pauseAudio,
  setLoop
) => {
  setShowPokeApi(!showPokeApi);

  const on_button = document.querySelector('.on_title');

  if (on_button.innerHTML !== 'ON') {
    const popup = document.querySelector('.div_popup');
    popup.style.display = 'flex';

    playAudio('on_sound');
    playAudio('start_sound');
    setLoop('start_sound', true);
  } else {
    playAudio('off_sound');
    pauseAudio('start_sound');
    pauseAudio('fight_sound');

    const popup = document.querySelector('.div_popup');
    popup.style.display = 'none';
  }
};

export const handleImageClick = (
  ev,
  setPokemonFighter,
  setRandomID,
  playAudio
) => {
  setPokemonFighter(true);

  ev.target.className = 'pkmn_goto_fight';

  playAudio('click_sound');

  const randomPkmnID = Math.floor(Math.random() * 1025);
  setRandomID(randomPkmnID);

  const yourFighterSection = document.querySelector('.your_fighter_info');
  if (yourFighterSection) {
    yourFighterSection.className = 'active_fighter_info';
  }

  const pokemonWinnerTitle = document.querySelector('.title_winner');
  if (pokemonWinnerTitle) {
    setTimeout(() => {
      pokemonWinnerTitle.style.zIndex = 1;
    }, 800);
  }
};

export const handleStopFight = (
  setPokemonFighter,
  setPokemonFighterData,
  playAudio,
  pauseAudio
) => {
  setPokemonFighter(false);
  setPokemonFighterData(null);

  playAudio('click_sound');
  pauseAudio('win_sound');
  pauseAudio('fight_sound');
  playAudio('start_sound');

  const onoffButtonDisabled = document.querySelector('.onoff_div');
  onoffButtonDisabled.style.zIndex = 1;

  const yourFighterSection = document.querySelector('.active_fighter_info');
  yourFighterSection.className = 'your_fighter_info';

  const textWinnerPkmn = document.querySelector('.title_winner');
  textWinnerPkmn.style.display = 'none';

  const pokemonGoToFight = document.querySelector('.pkmn_goto_fight');
  pokemonGoToFight.className = 'pokemon_img';
  pokemonGoToFight.style.filter = 'grayscale(0%)';
  pokemonGoToFight.style.animation = 'none';

  const choosedPokemonTitleName = document.querySelector('.titlename_pkmn_h3');
  const choosedPokemonTypeName = document.querySelector('.type_pkmn_h3');
  choosedPokemonTitleName.style.display = 'grid';
  choosedPokemonTypeName.style.display = 'grid';

  let navigateButtons = document.querySelector('.pokenavigate_btns');
  if (navigateButtons) {
    navigateButtons.style.display = 'flex';
  }

  let navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.style.display = 'flex';
  }
};
