export async function comparePokemonTypes(type1, type2, playAudio, pauseAudio) {
  try {
    async function getTypeData(typeName) {
      const response = await fetch(
        `https://pokeapi.co/api/v2/type/${typeName}`
      );
      const data = await response.json();
      return data;
    }

    const type1Data = await getTypeData(type1);
    const type2Data = await getTypeData(type2);

    const pokemonChoosed = document.querySelector('.pkmn_goto_fight');
    const pokemonRandom = document.querySelector('.pkmn_random_enemy');
    const choosedPokemonTitleName =
      document.querySelector('.titlename_pkmn_h3');
    const choosedPokemonTypeName = document.querySelector('.type_pkmn_h3');
    const enemyTitleName = document.querySelector('.titlename_enemy_h3');
    const enemyTypeName = document.querySelector('.type_enemy_h3');

    pokemonChoosed.style.animation = 'none';
    pokemonRandom.style.animation = 'none';
    pokemonChoosed.style.filter = 'none';
    pokemonRandom.style.filter = 'none';
    choosedPokemonTitleName.style.color = 'white';
    choosedPokemonTypeName.style.color = 'white';
    enemyTitleName.style.color = 'white';
    enemyTypeName.style.color = 'white';

    const type1DoubleDamageToType2 =
      type1Data.damage_relations.double_damage_to.some(
        (type) => type.name === type2
      );
    const type1HalfDamageToType2 =
      type1Data.damage_relations.half_damage_to.some(
        (type) => type.name === type2
      );
    const type1NoDamageToType2 = type1Data.damage_relations.no_damage_to.some(
      (type) => type.name === type2
    );

    const type2DoubleDamageToType1 =
      type2Data.damage_relations.double_damage_to.some(
        (type) => type.name === type1
      );
    const type2HalfDamageToType1 =
      type2Data.damage_relations.half_damage_to.some(
        (type) => type.name === type1
      );
    const type2NoDamageToType1 = type2Data.damage_relations.no_damage_to.some(
      (type) => type.name === type1
    );

    if (
      type1DoubleDamageToType2 ||
      type2HalfDamageToType1 ||
      type2NoDamageToType1
    ) {
      setTimeout(() => {
        pokemonChoosed.style.animation = 'zoom-effect 2s infinite';
        pokemonRandom.style.filter = 'grayscale(100%)';
        enemyTitleName.style.color = 'rgba(223, 53, 53, 0.203)';
        enemyTypeName.style.color = 'rgba(223, 53, 53, 0.203)';
        pauseAudio('fight_sound');
        playAudio('win_sound');
      }, 1200);

      return `YOU WIN!!!!! 😎`;
    } else if (
      type2DoubleDamageToType1 ||
      type1HalfDamageToType2 ||
      type1NoDamageToType2
    ) {
      setTimeout(() => {
        pauseAudio('win_sound');

        pokemonRandom.style.animation = 'zoom-effect 2s infinite';
        pokemonChoosed.style.filter = 'grayscale(100%)';
        choosedPokemonTitleName.style.color = 'rgba(223, 53, 53, 0.203)';
        choosedPokemonTypeName.style.color = 'rgba(223, 53, 53, 0.203)';

        playAudio('defeat_sound');
      }, 1200);
      return `ENEMY WINS! 😫`;
    } else {
      setTimeout(() => {
        pauseAudio('win_sound');
        playAudio('defeat_sound');
      }, 1200);
      return 'TIED MATCH! 😱';
    }
  } catch (error) {
    console.error('Error al comparar los tipos de Pokémon:', error);
  }
}
