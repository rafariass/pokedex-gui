import { useNavigate, useLocation } from 'react-router'
import { ArrowLeft } from 'lucide-react'

import { formattedCode } from '@/utils'

const PokeHeader = ({ name, id }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const fromPath = location?.state?.from || '/pokemons'

  return (
    <div className='poke-info-heder'>
      <span className='poke-info-id '>{formattedCode(id)}</span>
      <button className='poke-info-name' onClick={() => navigate(fromPath)}>
        <ArrowLeft className='poke-info-icon' />{name.replaceAll('-', ' ')}
      </button>
    </div>
  )
}

export default PokeHeader
