import { useEffect } from 'react'

import pokemonLoader from '@/assets/gif/pikachi-phone.gif'

const PokeLoader = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50'>
      <div className='bg-white rounded-xl shadow-lg p-6 w-80 flex flex-col items-center justify-center'>
        <img src={pokemonLoader} alt='Cargando...' />
      </div>
    </div>
  )
}

export default PokeLoader
