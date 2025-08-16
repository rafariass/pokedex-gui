import { useNavigate, useSearchParams } from 'react-router'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import usePokemonPage from '../hooks/usePokemonPage'

import PokeCard from './PokeCard'
import PokeLoader from '../shared/components/PokeLoader'

const PokeGallery = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const generation = `${Number(searchParams.get('generation') ?? '1') || '1'}`
  const page = `${Number(searchParams.get('page') ?? '1') || '1'}`

  window.history.replaceState({}, '', `/#/pokemons/gallery?generation=${generation}&page=${page}`)
  const { isLoading, isError, error, data } = usePokemonPage({ generation, page })

  if (isLoading === true) {
    return <PokeLoader />
  }

  if (isError === true) {
    console.error(error?.message)
    navigate('/error')
  }

  return (
    <div className='poke-wrap bg-pokemon'>
      {data?.pokemons?.map((pokemon) => (
        <PokeCard key={JSON.stringify(pokemon)} pokemon={pokemon} />
      ))}
      <div className='w-full flex flex-wrap justify-center items-center gap-5 mx-4 my-10 md:mb-0'>
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
      </div>
    </div>
  )
}

export default PokeGallery
