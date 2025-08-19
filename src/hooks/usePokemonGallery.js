import { useSearchParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'

import { pokemonDetails, pokemonsGeneration, pokemonsType } from '@/services/pokemon.service'

const conflictError = {
  code: 400,
  message: 'Búsqueda inválida: Debes indicar al menos un tipo o una generación, pero no ambos al mismo tiempo.'
}

const usePokemonGallery = () => {
  const [searchParams] = useSearchParams()

  const generation = Number(searchParams.get('generation')) || 0
  const type = Number(searchParams.get('type')) || 0
  const page = Number(searchParams.get('page')) || 1

  const conflict = (generation > 0) === (type > 0)
  const enabledByGeneration = conflict === false && generation > 0
  const enabledByType = conflict === false && type > 0

  if (generation > 0) window.history.replaceState({}, '', `/pokemons/gallery?generation=${generation}&page=${page}`)
  else if (type > 0) window.history.replaceState({}, '', `/pokemons/gallery?type=${type}&page=${page}`)

  const generationQuery = useQuery({
    enabled: enabledByGeneration,
    queryKey: ['generation', generation],
    queryFn: () => pokemonsGeneration(generation)
  })

  const typeQuery = useQuery({
    enabled: enabledByType,
    queryKey: ['type', type],
    queryFn: () => pokemonsType(type)
  })

  const activeSearch = {
    id: enabledByGeneration ? 'generation' : enabledByType ? 'type' : 'none',
    value: enabledByGeneration ? generation : enabledByType ? type : 0
  }

  const activeData = enabledByGeneration ? generationQuery : enabledByType ? typeQuery : null

  const pageQuery = useQuery({
    enabled: conflict === false && !!activeData?.data,
    queryKey: ['page', page, activeSearch.id, activeSearch.value],
    queryFn: async () => {
      const itemByPage = 20
      const start = (page - 1) * itemByPage
      const end = start + itemByPage
      const paginatedPokemons = activeData?.data?.pokemons?.slice(start, end) ?? []
      const totalPages = Math.ceil(activeData?.data?.pokemons?.length / itemByPage)

      if (page > totalPages) {
        throw new Error('La página solicitada es mayor que las páginas disponibles para esta categoría.')
      }

      if (totalPages === 0) {
        throw new Error('No hay resultados disponibles para esta búsqueda.')
      }

      const nextPage = page < totalPages ? `?${activeSearch?.id}=${activeSearch?.value}&page=${page + 1}` : null
      const previousPage = page > 1 ? `?${activeSearch?.id}=${activeSearch?.value}&page=${page - 1}` : null
      const fullNextPage = `?${activeSearch?.id}=${activeSearch?.value}&page=${totalPages}`
      const fullPreviousPage = `?${activeSearch?.id}=${activeSearch?.value}&page=1`

      return {
        category: {
          id: activeData?.data?.id,
          type: activeData?.data.category,
          name: activeData?.data?.region || activeData?.data?.type,
          count: activeData?.data?.pokemons?.length
        },
        pagination: {
          page,
          pages: totalPages,
          next: nextPage,
          previous: previousPage,
          fullNext: fullNextPage,
          fullPrevious: fullPreviousPage
        },
        pokemons: await Promise.all(paginatedPokemons.map((id) => pokemonDetails(id)))
      }
    }
  })

  const isLoading = generationQuery.isLoading || typeQuery.isLoading || pageQuery.isLoading
  const isError = conflict || generationQuery.isError || typeQuery.isError || pageQuery.isError
  const error = conflict ? conflictError : generationQuery.error || typeQuery.error || pageQuery.error
  const data = pageQuery.data ?? null

  return { isLoading, isError, error, data }
}

export default usePokemonGallery
