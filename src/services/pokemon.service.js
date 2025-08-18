import axios from '@/config/axios.config'

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
  return {
    id: data?.id,
    region: data?.main_region?.name,
    pokemons: data?.pokemon_species
      ?.map(({ url }) => url?.split('/').filter(Boolean).pop())
      ?.sort((a, b) => a - b)
  }
}

export const pokemonsType = async (type) => {
  const { data } = await axios.get(`/type/${type}`)
  return {
    id: data?.id,
    type: data?.name,
    pokemons: data?.pokemon
      ?.map(({ pokemon }) => pokemon?.url?.split('/').filter(Boolean).pop())
      ?.sort((a, b) => a - b)
  }
}
