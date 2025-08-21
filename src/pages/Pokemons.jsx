import { Outlet } from 'react-router'

import PokeNav from '@/components/PokeNav'
import PokeDashboard from '@/shared/components/PokeDashboard'
import PokeBreadcrumb from '@/shared/components/PokeBreadcrumb'

const Pokemons = () => {
  return (
    <PokeDashboard>
      <PokeNav>
        <PokeBreadcrumb />
      </PokeNav>
      <main className='poke-main'>
        <Outlet />
      </main>
    </PokeDashboard>
  )
}

export default Pokemons
