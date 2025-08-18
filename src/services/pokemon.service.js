import axios from '@/config/axios.config'

export const pokeCategories = async () => {
  const generation = await axios.get('/generation')
  const type = await axios.get('/type')

  const generations = generation.data.results.map(({ url, name }) => {
    const [first, second] = name.split('-')
    return {
      id: url?.split('/').filter(Boolean).pop(),
      name: `${first.charAt(0).toUpperCase() + first.slice(1).toLowerCase()} ${second.toUpperCase()}`
    }
  })

  const types = type.data.results.flatMap(({ url, name }) => {
    if (['unknown', 'stellar'].includes(name)) return []
    return [{
      id: url?.split('/').filter(Boolean).pop(),
      name: `${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}`
    }]
  })

  return { generations, types }
}

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
    category: 'generation',
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
    category: 'type',
    pokemons: data?.pokemon
      ?.map(({ pokemon }) => pokemon?.url?.split('/').filter(Boolean).pop())
      ?.sort((a, b) => a - b)
  }
}
