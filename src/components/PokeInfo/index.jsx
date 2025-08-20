import { Img } from 'react-image'
import { useParams } from 'react-router'

import PokeHeader from '@/components/PokeInfo/components/PokeHeader'
import PokeAbout from '@/components/PokeInfo/components/PokeAbout'
import PokeStats from '@/components/PokeInfo/components/PokeStats'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { ColorPicker } from '@/helpers/pokemon-color-picker'
import usePokemonDetails from '@/hooks/usePokemonDetails'
import PokeLoader from '@/shared/components/PokeLoader'
import PokeTag from '@/shared/components/PokeTag'

import pokemonLoader from '@/assets/gif/pikachu-running.gif'
import pokemonError from '@/assets/img/404_pokemon.webp'

const PokeInfo = () => {
  const { id } = useParams()
  const { isLoading, isError, data, shiny } = usePokemonDetails(id)

  if (isLoading === true || isError === true) return <PokeLoader />

  const colorBase = ColorPicker.byType(data?.types[0]?.type?.name)

  return (
    <div className='poke-info' style={{ backgroundColor: `${colorBase}4d` }}>
      <PokeHeader id={data?.id} name={data?.name} />
      <div className='poke-info-dashboard'>
        <Img
          alt={data?.name}
          draggable='false'
          src={shiny.isShiny ? data?.sprites?.shiny : data?.sprites?.default}
          className='poke-info-dashboard-img'
          style={{ filter: `drop-shadow(0 0 15px ${colorBase})` }}
          loader={<img src={pokemonLoader} className='poke-info-dashboard-img' style={{ filter: 'drop-shadow(0 0 15px #facc15)' }} alt='cargando...' />}
          unloader={<img src={pokemonError} className='poke-info-dashboard-img' style={{ filter: `drop-shadow(0 0 15px ${colorBase})` }} alt='error' />}
        />

        <div className='flex items-center space-x-2'>
          <Switch
            id='shiny-mode'
            className='data-[state=checked]:bg-midnight'
            checked={shiny.isShiny}
            onCheckedChange={shiny.handleShiny}
          />
          <Label htmlFor='shiny-mode'>Shiny version</Label>
        </div>

        <PokeTag className='max-w-[300px]' id={id} types={data?.types} />
        <PokeAbout
          height={data?.height}
          weight={data?.weight}
          type={data?.types[0]?.type?.name}
          colorBase={colorBase}
        />
        <PokeStats
          colorBase={colorBase}
          stats={data?.stats}
        />
      </div>
    </div>
  )
}

export default PokeInfo
