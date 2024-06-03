export const pkmnChoosedToFight = (ev, setPokemonFighter) => {
  setPokemonFighter(true);
  ev.target.className = 'pkmn_goto_fight';

  const fight_sound = document.getElementById('fight_sound');
  const start_sound = document.getElementById('start_sound');

  start_sound.pause();
  fight_sound.play();

  console.log('pelea wey');

  //   console.log(data.types[0].type.name);
  // aqui seleccionamos el tipo del pokemon
};
