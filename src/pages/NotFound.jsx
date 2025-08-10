import { useNavigate } from 'react-router'

import PokeHeader from '../components/PokeHeader'
import PokeMain from '../shared/components/PokeMain'
import PokeSupport from '../components/PokeSupport'
import notFoundImage from '../assets/img/404_web.webp'
import eggErrorImage from '../assets/img/egg_error.png'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className='grid h-[100dvh] grid-rows-[auto_1fr_auto] bg-[radial-gradient(circle_at_center,_white,_#fef3c7)]'>
      <PokeHeader />
      <PokeMain className='flex-col gap-8 md:w-1/2 overflow-y-visible px-4'>
        <img src={notFoundImage} className='drop-shadow-[0_0_15px_#0a0a0a3b] transition-transform duration-300 hover:scale-110 cursor-pikachu' alt='Ups... no pudimos encontrar esta página' draggable='false' />
        <p className='text-lg text-gray-700 font-medium text-center leading-[2]'>
          Parece que el huevo intentó eclosionar… ¡pero en lugar de un Pokémon, salió humo! Intenta más tarde o sigue tus huellas para no perder el rumbo y seguir explorando sin dejar atrás la diversión.
        </p>
        <button
          onClick={() => navigate(-1)}
          className='bg-[#ed5564] hover:bg-[#d64d5a] text-white py-3 px-12 rounded-full transition-transform duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-3 cursor-pointer'
        >
          <img src={eggErrorImage} alt='Huevo Pokémon' className='w-16 drop-shadow-[0_0_10px_#0a0a0a]' draggable='false' />
          Pokébola de regreso
        </button>
      </PokeMain>
      <PokeSupport />
    </div>
  )
}

export default NotFound
