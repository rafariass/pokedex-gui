import { Img } from 'react-image'
import { useNavigate } from 'react-router'

import pokemonError from '../../assets/img/404_pokemon.webp'
import pokemonLoader from '../../assets/gif/pikachu-running.gif'
import { ColorPicker } from '../../helpers/pokemon-color-picker'
import { formattedCode } from '../../utils'

const PokeCard = ({ pokemon }) => {
  const navigate = useNavigate()
  const { id, name, sprites, types = [] } = pokemon
  const colorBase = ColorPicker.byType(types[0]?.type?.name)

  return (
    <div
      className='poke-card cursor-pokeball group'
      onClick={() => navigate(`/pokemons/pokemon/${id}`)}
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
        <div className='w-full mt-2 flex flex-col md:flex-row gap-1'>
          {types?.map(({ type }) => (
            <span
              key={`${id}-${type?.name}`}
              className='poke-tag'
              style={{ background: `${ColorPicker.byType(type.name)}b3` }}
            >
              {type?.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PokeCard
