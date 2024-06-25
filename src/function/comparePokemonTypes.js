export async function comparePokemonTypes(type1, type2) {
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

    // const enemyTitleName = document.querySelector('.titlename_enemy_h3');
    // const enemyTypeName = document.querySelector('.type_enemy_h3');
    // enemyTitleName.style.display = 'block';
    // enemyTypeName.style.display = 'block';

    const choosedPokemonTitleName =
      document.querySelector('.titlename_pkmn_h3');
    const choosedPokemonTypeName = document.querySelector('.type_pkmn_h3');
    choosedPokemonTitleName.style.display = 'block';
    choosedPokemonTypeName.style.display = 'block';

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
      const pokemonChoosed = document.querySelector('.pkmn_goto_fight');
      const pokemonRandom = document.querySelector('.pkmn_random_enemy');
      const youWinSound = document.getElementById('win_sound');
      const fight_sound = document.getElementById('fight_sound');
      const enemyTitleName = document.querySelector('.titlename_enemy_h3');
      const enemyTypeName = document.querySelector('.type_enemy_h3');
      setTimeout(() => {
        pokemonChoosed.style.animation = 'zoom-effect 2s infinite';
        pokemonRandom.style.filter = 'grayscale(100%)';
        enemyTitleName.style.display = 'none';
        enemyTypeName.style.display = 'none';
        fight_sound.pause();
        youWinSound.play();
      }, 1100);

      return `YOU WIN!!!!! 😎`;
    } else if (
      type2DoubleDamageToType1 ||
      type1HalfDamageToType2 ||
      type1NoDamageToType2
    ) {
      const defeatSound = document.getElementById('defeat_sound');
      const fight_sound = document.getElementById('fight_sound');
      const pokemonRandom = document.querySelector('.pkmn_random_enemy');
      const pokemonChoosed = document.querySelector('.pkmn_goto_fight');
      const choosedPokemonTitleName =
        document.querySelector('.titlename_pkmn_h3');
      const choosedPokemonTypeName = document.querySelector('.type_pkmn_h3');
      setTimeout(() => {
        pokemonRandom.style.animation = 'zoom-effect 2s infinite';
        pokemonChoosed.style.filter = 'grayscale(100%)';
        choosedPokemonTitleName.style.display = 'none';
        choosedPokemonTypeName.style.display = 'none';
        fight_sound.pause();
        defeatSound.play();
      }, 1100);
      return `ENEMY WINS! 😫`;
    } else {
      setTimeout(() => {
        const defeatSound = document.getElementById('defeat_sound');
        defeatSound.play();
        const fight_sound = document.getElementById('fight_sound');
        fight_sound.pause();
      }, 1100);
      return 'TIED MATCH! 😱';
    }
  } catch (error) {
    console.error('Error al comparar los tipos de Pokémon:', error);
  }
}
