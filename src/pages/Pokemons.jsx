import { Outlet } from 'react-router'

import PokeNav from '@/components/PokeNav'
import PokeDashboard from '@/shared/components/PokeDashboard'

const Pokemons = () => {
  return (
    <PokeDashboard>
      <PokeNav />
      <main className='poke-main'>
        <Outlet />
      </main>
    </PokeDashboard>
  )
}

export default Pokemons
