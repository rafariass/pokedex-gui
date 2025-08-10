import { Link } from 'react-router'

import pokedexImage from '../assets/img/pokedex_title.png'

const PokeHeader = () => {
  return (
    <div
      className='flex items-center justify-center w-full h-75 text-white bg-midnight border border-midnight [clip-path:polygon(100%_0,_100%_93%,_70%_100%,_0_85%,_0_0)]'
    >
      <div className='w-[80%] md:max-w-125'>
        <Link to='/'>
          <img src={pokedexImage} className='mx-auto drop-shadow-[0_0_15px_#ffffff4d] transition-transform duration-300 hover:scale-110' alt='Logo de la Pokédex' draggable='false' aria-hidden='true' />
        </Link>
      </div>
    </div>
  )
}

export default PokeHeader
