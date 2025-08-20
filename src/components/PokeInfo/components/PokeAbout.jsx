import { Weight, RulerDimensionLine } from 'lucide-react'

import { formatNumber } from '@/utils'

const PokeAbout = ({ height, weight, type, colorBase }) => {
  return (
    <div className='w-full text-center mt-5'>
      <h2 className='poke-about-title' style={{ color: `${colorBase}b3` }}>About</h2>
      <div className='flex flex-col md:flex-row justify-center items-center '>

        <div className='poke-about-box poke-about-separation'>
          <span className='poke-about-subtitle'>Weight</span>
          <span className='poke-about-box-info'>
            <Weight
              className='poke-about-icon'
              style={{ color: `${colorBase}b3` }}
            />
            {formatNumber(weight / 10)} kg
          </span>
        </div>
        <div className='poke-about-box'>
          <span className='poke-about-subtitle'>Height</span>
          <span className='poke-about-box-info'>
            <RulerDimensionLine
              className='poke-about-icon'
              style={{ color: `${colorBase}b3` }}
            />
            {formatNumber(height / 10)} mt
          </span>
        </div>

      </div>
    </div>
  )
}

export default PokeAbout
