import { useEffect } from 'react'
import { useNavigate } from 'react-router'

import { Button } from '@/components/ui/button'
import useCategories from '@/hooks/useCategories'

import homeImage from '@/assets/img/Home.webp'
import pokemonLoader from '@/assets/gif/pikachu-running.gif'

const Home = () => {
  const navigate = useNavigate()
  const { isLoading, isError, error } = useCategories()

  useEffect(() => {
    if (isError) {
      console.error(error?.message)
      navigate('/error', { replace: true })
    }
  }, [isError, error, navigate])

  return (
    <div className='w-full h-[100dvh] flex flex-col justify-center items-center p-5'>
      <div className='max-w-[500px] flex flex-col justify-center items-center gap-8 '>
        <img src={homeImage} className='w-full' alt='Welcome to Pokekemon GUI' />
        <div className='text-white text-center'>
          <h1 className='text-center text-neutral-400 text-4xl md:text-5xl !font-bold drop-shadow-lg'>
            ¡Bienvenido a Pokemon GUI!
          </h1>
          <p className='pt-5'>
            Presiona el botón ‘Continuar’ y adéntrate en el fantástico mundo de los Pokémon,
            lleno de criaturas únicas y emocionantes aventuras.
          </p>
        </div>
        <Button
          className='cursor-pikachu'
          onClick={() => navigate('/pokemons')}
          disabled={isLoading}
        >
          <img src={pokemonLoader} className='w-[32px]' alt='Loading data' />
          {isLoading ? 'Loading...' : 'Continuar'}
        </Button>
      </div>
    </div>
  )
}

export default Home
