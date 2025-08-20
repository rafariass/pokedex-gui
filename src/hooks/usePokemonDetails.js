import { useQuery } from '@tanstack/react-query'

import { pokemonDetails } from '@/services/pokemon.service'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

const usePokemonDetails = (id) => {
  const navigate = useNavigate()
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => pokemonDetails(id)
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [data])

  useEffect(() => {
    if (isError) {
      console.error(error?.message)
      navigate('/error', { replace: true })
    }
  }, [isError, error, navigate])

  return { isLoading, isError, error, data }
}

export default usePokemonDetails
