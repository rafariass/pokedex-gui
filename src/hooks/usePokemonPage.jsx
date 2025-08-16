import { useQuery } from '@tanstack/react-query'

import { pokemonDetails, pokemonsGeneration } from '../services/pokemon.service'

const usePokemonPage = ({ generation, page }) => {
  const generationQuery = useQuery({
    queryKey: ['generations', generation],
    queryFn: () => pokemonsGeneration(generation)
  })

  const paginatedPokemonsQuery = useQuery({
    queryKey: ['generations', generation, 'page', page],
    queryFn: async () => {
      const itemByPage = 20
      const start = (page - 1) * itemByPage
      const end = start + itemByPage
      const paginatedSpecies = generationQuery?.data?.pokemons?.slice(start, end) ?? []
      const totalPages = Math.ceil(generationQuery?.data?.pokemons?.length / itemByPage)

      const nextPage = page < 1 || page < totalPages
        ? `?generation=${generation}&page=${Math.max(1, +page + 1)}`
        : null

      const previousPage = page > 1 && page <= totalPages
        ? `?generation=${generation}&page=${page - 1}`
        : null

      return {
        region: generationQuery?.data?.region,
        generation: generationQuery?.data?.generation,
        count: generationQuery?.data?.pokemons?.length,
        page,
        pages: totalPages,
        next: nextPage,
        previous: previousPage,
        pokemons: await Promise.all(paginatedSpecies.map((id) => pokemonDetails(id)))
      }
    },
    enabled: !!generationQuery.data
  })

  return {
    isLoading: generationQuery.isLoading || paginatedPokemonsQuery.isLoading,
    isError: generationQuery.isError || paginatedPokemonsQuery.isError,
    error: generationQuery.error || paginatedPokemonsQuery.error,
    data: paginatedPokemonsQuery.data
  }
}

export default usePokemonPage
