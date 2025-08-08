import { Outlet } from 'react-router'

import PokeNav from '../components/PokeNav'
import PokeSupport from '../components/PokeSupport'

const Dashboard = () => {
  return (
    <>
      <PokeNav />
      <Outlet />
      <PokeSupport />
    </>
  )
}

export default Dashboard
