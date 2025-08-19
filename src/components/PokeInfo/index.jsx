import { useEffect } from 'react'
import { Img } from 'react-image'
import { useParams, useNavigate } from 'react-router'

import PokeLoader from '@/shared/components/PokeLoader'
import usePokemonDetails from '@/hooks/usePokemonDetails'
import { ColorPicker } from '@/helpers/pokemon-color-picker'
import PokeHeader from '@/components/PokeInfo/components/PokeHeader'
import PokeAbout from '@/components/PokeInfo/components/PokeAbout'
import PokeTag from '@/shared/components/PokeTag'

import pokemonLoader from '@/assets/gif/pikachu-running.gif'
import pokemonError from '@/assets/img/404_pokemon.webp'

const PokeInfo = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { isLoading, isError, error, data } = usePokemonDetails(id)

  useEffect(() => {
    if (isError) {
      console.error(error?.message)
      navigate('/error', { replace: true })
    }
  }, [isError, error])

  if (isLoading === true) {
    return <PokeLoader />
  }

  const colorBase = ColorPicker.byType(data.types[0].type.name)

  console.log('Error -> Message:', error?.message)
  console.log('Data:', data)

  return (
    <div className='poke-info' style={{ backgroundColor: `${colorBase}4d` }}>
      <PokeHeader id={data?.id} name={data?.name} />
      <div className='poke-info-dashboard group'>
        <Img
          alt={data?.name}
          draggable='false'
          src={data?.sprites?.default}
          className='poke-info-dashboard-img'
          style={{ filter: `drop-shadow(0 0 15px ${colorBase})` }}
          loader={<img src={pokemonLoader} className='poke-info-dashboard-img' style={{ filter: 'drop-shadow(0 0 15px #facc15)' }} alt='cargando...' />}
          unloader={<img src={pokemonError} className='poke-info-dashboard-img' style={{ filter: `drop-shadow(0 0 15px ${colorBase})` }} alt='error' />}
        />
        <PokeTag className='max-w-[300px]' id={id} types={data?.types} />
        <PokeAbout height={data?.height} weight={data?.weight} type={data?.types[0]?.type?.name} />
      </div>
    </div>
  )
}

export default PokeInfo
