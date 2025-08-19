import { useNavigate } from 'react-router'

import { formattedCode } from '@/utils'
import { ArrowLeft } from 'lucide-react'

const PokeHeader = ({ name, id }) => {
  const navigate = useNavigate()

  return (
    <div className='poke-info-heder'>
      <span className='poke-info-id '>{formattedCode(id)}</span>
      <button className='poke-info-name' onClick={() => navigate(-1)}>
        <ArrowLeft className='poke-info-icon' />{name.replaceAll('-', ' ')}
      </button>
    </div>
  )
}

export default PokeHeader
