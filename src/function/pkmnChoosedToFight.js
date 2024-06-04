export const pkmnChoosedToFight = (
  ev,
  setPokemonFighter,
  setRandomID,
  data,
  pokemonFighterData
) => {
  setPokemonFighter(true);

  if (pokemonFighterData) {
    console.log(data.types[0].type.name);
    console.log(pokemonFighterData.types[0].type.name);
  }

  const randomPkmnID = Math.floor(Math.random() * 1025);
  setRandomID(randomPkmnID);

  ev.target.className = 'pkmn_goto_fight';
  const fight_sound = document.getElementById('fight_sound');
  const start_sound = document.getElementById('start_sound');
  let navigateButtons = document.querySelector('.pokenavigate_btns');
  let navbar = document.querySelector('.navbar');

  fight_sound.play();
  start_sound.pause();

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

  fight_sound.addEventListener('ended', () => {
    const pokemonImg = document.querySelector('.pkmn_goto_fight');
    if (pokemonImg) {
      pokemonImg.className = 'pokemon_img';
    }
    const pokemonRandomEnemy = document.querySelector('.pkmn_random_enemy');
    pokemonRandomEnemy.style.display = 'none';

    navigateButtons.style.display = 'flex';
    navbar.style.display = 'flex';

    start_sound.loop = true;
    start_sound.play();
  });
};

//   console.log(data.types[0].type.name);
// aqui seleccionamos el tipo del pokemon
