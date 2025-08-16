import { Link } from 'react-router'

import pokedexImage from '../assets/img/pokedex_title.png'

const PokeNav = ({ children }) => {
  return (
    <div className='poke-nav'>
      <Link to='/'>
        <img
          src={pokedexImage}
          className='poke-logo'
          alt='Logo de la Pokédex'
          draggable='false'
          aria-hidden='true'
        />
      </Link>
      {children}
    </div>
  )
}

export default PokeNav
