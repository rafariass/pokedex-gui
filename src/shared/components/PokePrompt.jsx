import { useNavigate } from 'react-router'

import pikachuPhd from '@/assets/img/10083.png'
import pikachuCosplay from '@/assets/img/10085.png'

const PokePrompt = () => {
  const naviagete = useNavigate()

  return (
    <div className='flex items-center justify-center flex-col gap-6'>
      <h1 className='prompt-title'>Galería Pokémon</h1>
      <div className='flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-[750px] py-4'>

        <div className='poke-card poke-prompt cursor-pokeball group' onClick={() => naviagete('/pokemons/gallery?generation=1&page=1')}>
          <div className='poke-card-header'>
            <img src={pikachuPhd} className='poke-prompt-img' alt='Type Generation' />
          </div>
          <h2 className='poke-prompt-title'>Generación</h2>
        </div>

        <div className='poke-card poke-prompt cursor-pokeball group' onClick={() => naviagete('/pokemons/gallery?type=1&page=1')}>
          <div className='poke-card-header'>
            <img src={pikachuCosplay} className='poke-prompt-img' alt='Type Gallery' />
          </div>
          <h2 className='poke-prompt-title'>Tipos</h2>
        </div>

      </div>
    </div>
  )
}

export default PokePrompt
