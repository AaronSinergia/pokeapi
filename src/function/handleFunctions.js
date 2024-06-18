export const handleReload = () => {
  window.location.href = '/';
};

export const handleChange = (event, setInputValue) => {
  setInputValue(event.target.value);
};

export const handleSubmit = (inputValue, setinputPkmID) => {
  setinputPkmID(inputValue.toLowerCase());
};

export const handleClickAndSound = () => {
  const click_sound = document.getElementById('click_sound');
  click_sound.play();
};

export const handleStopMusic = (musicOff, setMusicOff) => {
  setMusicOff(!musicOff);

  const start_sound = document.getElementById('start_sound');
  let musicOffLogo = document.querySelector('.mute_btn');

  let allAudioElements = document.querySelectorAll('audio');

  let pokemonEnemy = document.querySelector('.pkmn_random_enemy');

  if (musicOff) {
    console.log('musica off');
    musicOffLogo.src = './assets/mute_logo.png';
    allAudioElements.forEach((audio) => {
      audio.pause();
    });
  } else {
    console.log('musica sonando!!');
    musicOffLogo.src = './assets/onSound_logo.png';

    if (pokemonEnemy) {
      const fight_sound = document.getElementById('fight_sound');
      fight_sound.play();
    } else {
      start_sound.play();
    }
  }
};

export const handleTogglePokeApi = (showPokeApi, setShowPokeApi) => {
  setShowPokeApi(!showPokeApi);

  const on_button = document.querySelector('.on_title');

  if (on_button.innerHTML !== 'ON') {
    const popup = document.querySelector('.div_popup');
    popup.style.display = 'flex';
    const on_sound = document.getElementById('on_sound');
    const start_sound = document.getElementById('start_sound');

    on_sound.play();
    start_sound.loop = true;
    start_sound.play();
  } else {
    const off_sound = document.getElementById('off_sound');
    off_sound.play();
    start_sound.pause();

    const fight_sound = document.getElementById('fight_sound');
    fight_sound.pause();

    const popup = document.querySelector('.div_popup');
    popup.style.display = 'none';
  }
};

export const handleImageClick = (
  ev,
  setPokemonFighter,
  setRandomID,
  musicOff
) => {
  setPokemonFighter(true);

  let musicOffLogo = document.querySelector('.mute_btn');

  if (!musicOff) {
    musicOffLogo.src = './assets/onSound_logo.png';
  }

  const randomPkmnID = Math.floor(Math.random() * 1025);
  setRandomID(randomPkmnID);

  ev.target.className = 'pkmn_goto_fight';

  const pokemonWinnerTitle = document.querySelector('.title_winner');
  if (pokemonWinnerTitle) {
    pokemonWinnerTitle.style.zIndex = 1;
  }

  const youWinSound = document.getElementById('win_sound');
  if (youWinSound) {
    youWinSound.pause();
  }

  const pkmnGoToFight = document.querySelector('.pkmn_goto_fight');
  const pokemonRandomEnemy = document.querySelector('.pkmn_random_enemy');
  if (pkmnGoToFight) {
    pkmnGoToFight.style.filter = 'grayscale(0%)';
    pkmnGoToFight.style.animation = 'none';
    if (pokemonRandomEnemy) {
      pokemonRandomEnemy.style.filter = 'grayscale(0%)';
      pokemonRandomEnemy.style.animation = 'none';
    }
  }
};

export const handleStopFight = (setPokemonFighter, setPokemonFighterData) => {
  setPokemonFighter(false);
  setPokemonFighterData(null);

  const onoffButtonDisabled = document.querySelector('.onoff_div');
  onoffButtonDisabled.style.zIndex = 1;

  const textWinnerPkmn = document.querySelector('.title_winner');
  textWinnerPkmn.style.display = 'none';

  const pokemonGoToFight = document.querySelector('.pkmn_goto_fight');
  pokemonGoToFight.className = 'pokemon_img';

  const pokemonType = document.querySelector('.pokemon_type');
  if (pokemonType) {
    pokemonType.style.position = 'relative';
    pokemonType.style.marginTop = '15px';
    pokemonType.style.marginLeft = '0px';
  }

  const pokemonRandomEnemy = document.querySelector('.pkmn_random_enemy');
  if (pokemonRandomEnemy) {
    pokemonRandomEnemy.style.display = 'none';
  }

  const pokemonChoosed = document.querySelector('.pokemon_img');
  pokemonChoosed.style.filter = 'grayscale(0%)';
  pokemonChoosed.style.animation = 'none';

  let musicOffLogo = document.querySelector('.mute_btn');
  musicOffLogo.style.display = 'flex';

  const fight_sound = document.getElementById('fight_sound');
  const start_sound = document.getElementById('start_sound');

  if (fight_sound) fight_sound.pause();
  if (start_sound) {
    start_sound.loop = true;
    start_sound.play();
  }

  const youWinSound = document.getElementById('win_sound');
  youWinSound.pause();

  let navigateButtons = document.querySelector('.pokenavigate_btns');
  if (navigateButtons) {
    navigateButtons.style.display = 'flex';
  }

  let navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.style.display = 'flex';
  }
};
