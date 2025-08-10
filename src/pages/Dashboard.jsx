import { Outlet } from 'react-router'

import PokeNav from '../components/PokeNav'
import PokeMain from '../shared/components/PokeMain'
import PokeSupport from '../components/PokeSupport'

const Dashboard = () => {
  return (
    <div className='grid h-[100dvh] grid-rows-[auto_1fr_auto] bg-[radial-gradient(circle_at_center,_white,_#fef3c7)]'>
      <PokeNav />
      <PokeMain>
        <Outlet />
      </PokeMain>
      <PokeSupport />
    </div>
  )
}

export default Dashboard
