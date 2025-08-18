import { useNavigate } from 'react-router'

import PokeNav from '@/components/PokeNav'
import PokeMain from '@/shared/components/PokeMain'
import PokeDashboard from '@/shared/components/PokeDashboard'

import notFoundImage from '@/assets/img/404_web.webp'
import eggErrorImage from '@/assets/img/egg_error.png'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <PokeDashboard>
      <PokeNav />
      <PokeMain className='flex-col gap-8 w-full md:max-w-[750px] px-4'>
        <img
          src={notFoundImage}
          className='poke-error cursor-pikachu'
          alt='Ups... no pudimos encontrar esta página'
          draggable='false'
        />
        <p className='text-lg text-gray-700 font-medium text-center leading-[2]'>
          Parece que el huevo intentó eclosionar… ¡pero en lugar de un Pokémon, salió humo! Intenta más tarde o sigue tus huellas para no perder el rumbo y seguir explorando sin dejar atrás la diversión.
        </p>
        <button
          onClick={() => navigate('/pokemons')}
          className='bg-[#ed5564] hover:bg-[#d64d5a] text-white py-3 px-12 rounded-full transition-transform duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-3 cursor-pointer'
        >
          <img
            src={eggErrorImage}
            alt='Huevo Pokémon'
            className='w-16 drop-shadow-[0_0_10px_#0a0a0a]'
            draggable='false'
          />
          Pokébola de regreso
        </button>
      </PokeMain>
    </PokeDashboard>
  )
}

export default NotFound
