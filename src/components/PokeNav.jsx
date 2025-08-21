import { Link } from 'react-router'

import PokeBreadcrumb from '@/shared/components/PokeBreadcrumb'

import pokedexImage from '@/assets/img/pokedex_title.png'

const PokeNav = () => {
  return (
    <div className='poke-nav'>
      <Link to='/pokemons'>
        <img
          src={pokedexImage}
          className='poke-logo'
          alt='Logo de la Pokédex'
          draggable='false'
          aria-hidden='true'
        />
      </Link>
      <PokeBreadcrumb />
    </div>
  )
}

export default PokeNav
