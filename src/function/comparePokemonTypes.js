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
      return `${type1} IS WINNER TYPE`;
    } else if (
      type2DoubleDamageToType1 ||
      type1HalfDamageToType2 ||
      type1NoDamageToType2
    ) {
      return `${type2} IS WINNER TYPE`;
    } else if (
      type1HalfDamageToType2 ||
      type1NoDamageToType2 ||
      type2HalfDamageToType1 ||
      type2NoDamageToType1
    ) {
      return 'Both types are less effective against each other.';
    } else {
      return 'Both types are less effective against each other.';
    }

    // if (
    //   type1DoubleDamageToType2 ||
    //   type2HalfDamageToType1 ||
    //   type2NoDamageToType1
    // ) {
    //   console.log(`${type1} tiene ventaja sobre ${type2}`);
    //   // const type1Wins = `${type1} tiene ventaja sobre ${type2}`;
    //   // return type1Wins;
    // } else if (
    //   type2DoubleDamageToType1 ||
    //   type1HalfDamageToType2 ||
    //   type1NoDamageToType2
    // ) {
    //   console.log(`${type2} tiene ventaja sobre ${type1}`);
    // } else if (
    //   type1HalfDamageToType2 ||
    //   type1NoDamageToType2 ||
    //   type2HalfDamageToType1 ||
    //   type2NoDamageToType1
    // ) {
    //   console.log('Ambos tipos son menos efectivos entre sí.');
    // } else {
    //   console.log('Ambos tipos son igualmente efectivos entre sí.');
    // }
  } catch (error) {
    console.error('Error al comparar los tipos de Pokémon:', error);
  }
}
