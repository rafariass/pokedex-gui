import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useQuery } from '@tanstack/react-query'

import { useShinyToggle } from '@/hooks/useShinyToggle'
import { pokemonDetails } from '@/services/pokemon.service'

const usePokemonDetails = (id) => {
  const shiny = useShinyToggle()
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

  return { isLoading, isError, error, data, shiny }
}

export default usePokemonDetails
