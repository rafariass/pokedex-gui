import { Img } from 'react-image'
import { useNavigate, useLocation } from 'react-router'

import { formattedCode } from '@/utils'
import { ColorPicker } from '@/helpers/pokemon-color-picker'
import PokeTag from '@/shared/components/PokeTag'

import pokemonLoader from '@/assets/gif/pikachu-running.gif'
import pokemonError from '@/assets/img/404_pokemon.webp'

const PokeCard = ({ pokemon }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const fromPath = {
    state: { from: location.pathname + location.search }
  }

  const { id, name, sprites, types = [] } = pokemon
  const colorBase = ColorPicker.byType(types[0]?.type?.name)

  return (
    <div
      className='poke-card cursor-pokeball group'
      onClick={() => navigate(`/pokemons/pokemon/${id}`, fromPath)}
      style={{
        background: `radial-gradient(circle at center, ${colorBase}4d, white)`,
        border: `1px solid ${colorBase}4d`
      }}
    >
      <div className='poke-card-header'>
        <Img
          alt={name}
          draggable='false'
          src={sprites?.default}
          className='poke-card-img'
          style={{ filter: `drop-shadow(0 0 15px ${colorBase})` }}
          loader={<img src={pokemonLoader} className='poke-card-img' style={{ filter: 'drop-shadow(0 0 15px #facc15)' }} alt='cargando...' />}
          unloader={<img src={pokemonError} className='poke-card-img' style={{ filter: `drop-shadow(0 0 15px ${colorBase})` }} alt='error' />}
        />
      </div>
      <div className='poke-card-body'>
        <span className='poke-card-subtitle'>{formattedCode(id)}</span>
        <h2 className='poke-card-title'>{name?.replaceAll('-', ' ')}</h2>
        <PokeTag className='mt-2' id={id} types={types} />
      </div>
    </div>
  )
}

export default PokeCard
