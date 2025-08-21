import { useNavigate, useLocation, Link } from 'react-router'
import { ArrowLeft, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { formatCode } from '@/utils'

const PokeHeader = ({ name, id }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const fromPath = location?.state?.from || '/pokemons'
  const previous = id <= 1 ? { visibility: 'hidden' } : {}
  const next = id >= 10277 ? { visibility: 'hidden' } : {}

  return (
    <div className='poke-info-heder'>
      <div className='w-full flex justify-end items-center gap-5'>
        <Link to={`/pokemons/pokemon/${id === 10001 ? 1025 : id - 1}`} className='poke-info-id poke-icon-border' style={previous}>
          <ChevronLeftIcon className='poke-info-icon' />
        </Link>
        <span className='poke-info-id'>{formatCode(id)}</span>
        <Link to={`/pokemons/pokemon/${id === 1025 ? 10001 : id + 1}`} className='poke-info-id poke-icon-border' style={next}>
          <ChevronRightIcon className='poke-info-icon' />
        </Link>
      </div>
      <button className='poke-info-name' onClick={() => navigate(fromPath)}>
        <ArrowLeft className='poke-info-icon' />{name.replaceAll('-', ' ')}
      </button>
    </div>
  )
}

export default PokeHeader
