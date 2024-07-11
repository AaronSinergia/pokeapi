export const handleReload = () => {
  window.location.href = '/';
};

export const handleChange = (event, setInputValue) => {
  setInputValue(event.target.value);
};

export const handleSubmit = (inputValue, setinputPkmID) => {
  setinputPkmID(inputValue.toLowerCase());
};

export const handleTogglePokeApi = (
  showPokeApi,
  setShowPokeApi,
  playAudio,
  pauseAudio,
  setLoop
) => {
  setShowPokeApi(!showPokeApi);

  if (!showPokeApi) {
    playAudio('on_sound');
    playAudio('start_sound');
    setLoop('start_sound', true);
  } else {
    playAudio('off_sound');
    pauseAudio('start_sound');
    pauseAudio('fight_sound');
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
};

export const handleStopFight = (
  setPokemonFighter,
  setPokemonFighterData,
  playAudio,
  pauseAudio
) => {
  setPokemonFighter(false);
  setPokemonFighterData(null);

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
  choosedPokemonTitleName.style.color = 'white';
  choosedPokemonTypeName.style.color = 'white';

  let navigateButtons = document.querySelector('.pokenavigate_btns');
  if (navigateButtons) {
    navigateButtons.style.display = 'flex';
  }

  let navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.style.display = 'flex';
  }
};

export const handleStopMusic = (toggleMusic) => {
  toggleMusic();
};

export const handleStartFight = (playAudio, pauseAudio) => {
  pauseAudio('start_sound');
  playAudio('fight_sound');

  const onoffButtonDisabled = document.querySelector('.onoff_div');
  if (onoffButtonDisabled) {
    onoffButtonDisabled.style.zIndex = -1;
  }

  let navigateButtons = document.querySelector('.pokenavigate_btns');
  let navbar = document.querySelector('.navbar');

  const pokemonRandomEnemy = document.querySelector('.pkmn_random_enemy');
  if (pokemonRandomEnemy) {
    pokemonRandomEnemy.style.display = 'flex';
  }

  if (navigateButtons) {
    navigateButtons.style.display = 'none';
  }
  if (navbar) {
    navbar.style.display = 'none';
  }

  const textWinnerPkmn = document.querySelector('.title_winner');
  if (textWinnerPkmn) {
    textWinnerPkmn.style.display = 'flex';
  }

  const choosedPokemonTitleName = document.querySelector('.titlename_pkmn_h3');
  const choosedPokemonTypeName = document.querySelector('.type_pkmn_h3');
  if (choosedPokemonTitleName) {
    choosedPokemonTitleName.style.display = 'block';
  }
  if (choosedPokemonTypeName) {
    choosedPokemonTypeName.style.display = 'block';
  }

  const enemyTitleName = document.querySelector('.titlename_enemy_h3');
  const enemyTypeName = document.querySelector('.type_enemy_h3');
  if (enemyTitleName) {
    enemyTitleName.style.display = 'block';
  }
  if (enemyTypeName) {
    enemyTypeName.style.display = 'block';
  }
};
