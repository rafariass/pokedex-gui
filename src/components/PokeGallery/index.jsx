import { useEffect } from 'react'
import { useNavigate } from 'react-router'

import PokeCard from '@/components/PokeCard'
import PokeSelect from '@/components/PokeSelect'
import PokeLoader from '@/shared/components/PokeLoader'
import PokePagination from '@/shared/components/PokePagination'
import usePokemonGallery from '@/hooks/usePokemonGallery'

const PokeGallery = () => {
  const navigate = useNavigate()
  const { isLoading, isError, error, data } = usePokemonGallery()

  useEffect(() => {
    if (isError) {
      console.error(error?.message)
      navigate('/error', { replace: true })
    }
  }, [isError, error, navigate])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [data])

  if (isLoading === true) {
    return <PokeLoader />
  }

  return (
    <div className='poke-wrap bg-pokemon'>
      <PokeSelect category={data?.category} />

      {data?.pokemons?.map((pokemon) => (
        <PokeCard key={pokemon.name} pokemon={pokemon} />
      ))}

      <PokePagination pagination={data?.pagination} />
    </div>
  )
}

export default PokeGallery
