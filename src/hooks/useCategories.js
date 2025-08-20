import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

import { pokeCategories } from '@/services/pokemon.service'
import usePokedexStore from '@/stores/usePokemonStore'

const useCategories = () => {
  const { types, generations, setupData } = usePokedexStore()

  const { isLoading, isError, error, data } = useQuery({
    enabled: types.length === 0 || generations.length === 0,
    queryKey: ['categorias'],
    queryFn: pokeCategories
  })

  useEffect(() => {
    if (data && !isError) {
      setupData({ types: data.types, generations: data.generations })
    }

    isError && console.error('Ha ocurrido un error inesperado:', error)
  }, [data, isError, setupData])

  return { isLoading, isError }
}

export default useCategories
