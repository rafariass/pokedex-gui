import { Outlet } from 'react-router'

import PokeNav from '@/components/PokeNav'
import PokeMain from '@/shared/components/PokeMain'
import PokeDashboard from '@/shared/components/PokeDashboard'

const Pokemons = () => {
  return (
    <PokeDashboard>
      <PokeNav />
      <PokeMain className='max-w-[2000px]'>
        <Outlet />
      </PokeMain>
    </PokeDashboard>
  )
}

export default Pokemons
