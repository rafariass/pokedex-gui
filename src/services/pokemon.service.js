import axios from '@/config/axios.config'

import { formatPokemonStats } from '@/utils'

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
  const { data: pokemon } = await axios.get(`/pokemon/${id}`)
  const species = await pokemonSpecies(id)

  return {
    id: pokemon?.id,
    name: pokemon?.name,
    height: pokemon?.height,
    weight: pokemon?.weight,
    abilities: pokemon?.abilities,
    stats: formatPokemonStats(pokemon?.stats),
    types: pokemon?.types,
    sprites: {
      default: pokemon?.sprites?.other?.['official-artwork']?.front_default,
      shiny: pokemon?.sprites?.other?.['official-artwork']?.front_shiny
    },
    lores: species.lores,
    evochain: species.evochain
  }
}

export const pokemonSpecies = async (id) => {
  try {
    const { data: species } = await axios.get(`/pokemon-species/${id}`)

    return {
      lores: [
        ...new Set(
          species?.flavor_text_entries?.flatMap((lore) => (
            lore?.language?.name === 'es'
              ? lore?.flavor_text?.replace(/\f/g, ' ').replace(/\n/g, ' ').trim() || []
              : []
          ))
        )
      ],
      evochain: {
        id: species?.evolution_chain?.url?.split('/').filter(Boolean).pop(),
        chain: []
      }
    }
  } catch (error) {
    console.error(error.message)
    return {
      lores: [],
      evochain: {
        id: null,
        chain: []
      }
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

export const pokemonGetEvolutionChain = async (id) => {
  const { data: evoData } = await axios.get(`/evolution-chain/${id}`)

  const chain = []

  const traverse = async (node) => {
    const { data: poke } = await axios.get(`/pokemon/${node.species.name}`)

    chain.push({
      id: poke?.id,
      name: poke?.name,
      sprites: {
        default: poke?.sprites?.other?.['official-artwork']?.front_default,
        shiny: poke?.sprites?.other?.['official-artwork']?.front_shiny
      }
    })

    await Promise.all(node?.evolves_to?.map(traverse))
  }

  await traverse(evoData?.chain)

  return { evolution_chain: chain }
}
