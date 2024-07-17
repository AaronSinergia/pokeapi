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
  setComparisionResult,
  setPokemonFighter,
  setRandomID,
  playAudio,
  showGif,
  setShowGif
) => {
  setComparisionResult('');
  setPokemonFighter(true);
  playAudio('click_sound');

  setShowGif(true);

  console.log(showGif);

  setTimeout(() => {
    setShowGif(false);
  }, 2500);

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
