import { useQuery } from '@tanstack/react-query'
import { pokemonDetails } from '../services/pokemon.service'

const usePokemonDetails = (id) => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => pokemonDetails(id)
  })

  return { isLoading, isError, error, data }
}

export default usePokemonDetails
