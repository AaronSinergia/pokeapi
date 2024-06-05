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

    // Check effectiveness of type1 against type2
    const type1DamageToType2 = type1Data.damage_relations.double_damage_to.find(
      (type) => type.name === type2
    );
    const type2DamageFromType1 =
      type2Data.damage_relations.half_damage_from.find(
        (type) => type.name === type1
      );

    // Check effectiveness of type2 against type1
    const type2DamageToType1 = type2Data.damage_relations.double_damage_to.find(
      (type) => type.name === type1
    );
    const type1DamageFromType2 =
      type1Data.damage_relations.half_damage_from.find(
        (type) => type.name === type2
      );

    if (type1DamageToType2 && type2DamageFromType1) {
      console.log(`${type1} tiene ventaja sobre ${type2}`);
    } else if (type2DamageToType1 && type1DamageFromType2) {
      console.log(`${type2} tiene ventaja sobre ${type1}`);
    } else {
      console.log('Ambos tipos son igualmente efectivos entre sí.');
    }
  } catch (error) {
    console.error('Error al comparar los tipos de Pokémon:', error);
  }
}
