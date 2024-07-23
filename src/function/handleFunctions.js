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
  setPokemonFighter,
  setRandomID,
  setShowGif,
  playAudio,
  pauseAudio
) => {
  playAudio('click_sound');
  pauseAudio('start_sound');
  pauseAudio('fight_sound');
  playAudio('fight_sound');

  setShowGif(true);

  setTimeout(() => {
    setPokemonFighter(true);
    setShowGif(false);
  }, 3100);

  const randomPkmnID = Math.floor(Math.random() * 1025);
  setRandomID(randomPkmnID);
};

export const handleStopMusic = (playAudio, toggleMusic) => {
  playAudio('click_sound');
  toggleMusic();
};

export const handleStopFight = (
  setComparisionResult,
  setPokemonFighter,
  setPokemonFighterData,
  playAudio,
  pauseAudio
) => {
  setPokemonFighter(false);
  setPokemonFighterData(null);
  setComparisionResult(false);

  pauseAudio('win_sound');
  pauseAudio('fight_sound');
  playAudio('start_sound');
};

export const handleMainPkmnClicked = (
  pokemonFighterData,
  comparisionResult
) => ({
  animation:
    pokemonFighterData && comparisionResult === 'YOU WIN!!!!! 😎'
      ? 'zoom-effect 2s infinite'
      : 'none',
  filter:
    pokemonFighterData && comparisionResult === 'ENEMY WINS! 😫'
      ? 'grayscale(100%)'
      : 'grayscale(0%)',
});

export const handleStyleOponentPkmnClicked = (comparisionResult) => ({
  animation:
    comparisionResult === 'ENEMY WINS! 😫' ? 'zoom-effect 2s infinite' : 'none',
  filter:
    comparisionResult === 'YOU WIN!!!!! 😎'
      ? 'grayscale(100%)'
      : 'grayscale(0%)',
});

export const styleTextMainPKMN = (comparisionResult) => ({
  color:
    !comparisionResult || comparisionResult === 'YOU WIN!!!!! 😎'
      ? 'white'
      : 'rgba(223, 53, 53, 0.203)',
  filter:
    comparisionResult === 'YOU WIN!!!!! 😎'
      ? 'grayscale(0%)'
      : 'grayscale(100%)',
});

export const styleTextOponentPKMN = (comparisionResult) => ({
  color:
    !comparisionResult || comparisionResult === 'ENEMY WINS! 😫'
      ? 'white'
      : 'rgba(223, 53, 53, 0.203)',
  filter:
    comparisionResult === 'ENEMY WINS! 😫'
      ? 'grayscale(0%)'
      : 'grayscale(100%)',
});
