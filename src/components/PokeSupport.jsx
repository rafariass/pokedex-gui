import { Terminal } from 'lucide-react'

import rafariass from '@/assets/icon/rafariass.ico'

const PokeSupport = () => {
  return (
    <footer className='poke-support'>
      <p className='leading-[2]'>
        Raúl Farias S. Frontend Developer&#174; 2025.<br />
        <span className='inline-flex'>
          Created by
          <a href='https://www.linkedin.com/in/rafariass2/' className='inline-flex items-center no-underline' target='_blank' rel='noreferrer'>
            <img src={rafariass} className='mx-2 w-8' alt='rafariass icon' draggable='false' />
            <Terminal /> RaFariasS&#174;.
          </a>
        </span>
      </p>
    </footer>
  )
}

export default PokeSupport
