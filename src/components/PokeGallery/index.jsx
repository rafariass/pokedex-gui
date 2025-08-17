import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { ChevronLeft, ChevronsLeft, ChevronRight, ChevronsRight } from 'lucide-react'

import usePokemonGallery from '../../hooks/usePokemonGallery'

import PokeCard from '../PokeCard'
import PokeLoader from '../../shared/components/PokeLoader'

const PokeGallery = () => {
  const navigate = useNavigate()
  const { isLoading, isError, error, data } = usePokemonGallery()

  useEffect(() => {
    if (isError) {
      console.error(error?.message)
      navigate('/error', { replace: true })
    }
  }, [isError, error, navigate])

  if (isLoading === true) {
    return <PokeLoader />
  }

  return (
    <div className='poke-wrap bg-pokemon'>
      {data?.pokemons?.map((pokemon) => (
        <PokeCard key={pokemon.name} pokemon={pokemon} />
      ))}
      <div className='w-full flex flex-wrap justify-center items-center gap-5 mx-4 my-10 md:mb-0'>
        <button
          className='poke-btn cursor-pikachu'
          onClick={() => navigate(data?.fullPrevious)}
          disabled={data?.page === 1}
        >
          <ChevronsLeft />
        </button>
        <button
          className='poke-btn cursor-pikachu'
          onClick={() => navigate(data?.previous)}
          disabled={data?.previous === null}
        >
          <ChevronLeft />
        </button>
        Página {data?.page} de {data?.pages}
        <button
          className='poke-btn cursor-pikachu'
          onClick={() => navigate(data?.next)}
          disabled={data?.next === null}
        >
          <ChevronRight />
        </button>
        <button
          className='poke-btn cursor-pikachu'
          onClick={() => navigate(data?.fullNext)}
          disabled={data?.page === data?.pages}
        >
          <ChevronsRight />
        </button>
      </div>
    </div>
  )
}

export default PokeGallery
