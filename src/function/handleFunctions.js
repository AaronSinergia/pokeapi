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

  if (musicOff) {
    musicOffLogo.src = './assets/mute_logo.png';
    start_sound.pause();
  } else {
    musicOffLogo.src = './assets/onSound_logo.png';
    start_sound.play();
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
