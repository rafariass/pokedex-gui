import axios from '../config/axios.config'

export const pokemonDetails = async (id) => {
  const { data } = await axios.get(`/pokemon/${id}`)
  return {
    id: data?.id,
    name: data?.name,
    height: data?.height,
    weight: data?.weight,
    abilities: data?.abilities,
    stats: data?.stats,
    types: data?.types,
    sprites: {
      default: data?.sprites?.other?.['official-artwork']?.front_default,
      shiny: data?.sprites?.other?.['official-artwork']?.front_shiny
    }
  }
}

export const pokemonsGeneration = async (generation) => {
  const { data } = await axios.get(`/generation/${generation}`)
  const pokemons = {
    region: data?.main_region?.name,
    generation: data?.id,
    pokemons: data?.pokemon_species
      .map(({ url }) => url.split('/').filter(Boolean).pop())
      .sort((a, b) => a - b)
  }

  return pokemons
}
