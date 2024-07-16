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

export const handleImageClick = (setPokemonFighter, setRandomID, playAudio) => {
  setPokemonFighter(true);
  playAudio('click_sound');

  const randomPkmnID = Math.floor(Math.random() * 1025);
  setRandomID(randomPkmnID);
};

export const handleStopMusic = (toggleMusic) => {
  toggleMusic();
};

export const handleStartFight = (playAudio, pauseAudio) => {
  pauseAudio('start_sound');
  playAudio('fight_sound');
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

  // const pokemonGoToFight = document.querySelector('.pkmn_goto_fight');
  // pokemonGoToFight.style.filter = 'grayscale(0%)';
  // pokemonGoToFight.style.animation = 'none';
};
