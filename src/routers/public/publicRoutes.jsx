import { lazy } from 'react'
import { Navigate } from 'react-router'

const HomePage = lazy(() => import('../../pages/Home'))
const Dashboard = lazy(() => import('../../pages/Dashboard'))
const NotFoundPage = lazy(() => import('../../pages/NotFound'))

const PokeGallery = lazy(() => import('../../components/PokeGallery'))
const PokeInfo = lazy(() => import('../../components/PokeInfo'))
const PokePrompt = lazy(() => import('../../shared/components/PokePrompt'))

export const publicRoutes = [
  { path: '/', Component: HomePage },
  {
    path: '/dashboard',
    Component: Dashboard,
    children: [
      { index: true, Component: PokePrompt },
      { path: 'gallery', Component: () => <Navigate to='/not-found' /> },
      { path: 'pokemon', Component: () => <Navigate to='/not-found' /> },
      { path: 'gallery/:category', Component: PokeGallery },
      { path: 'pokemon/:id', Component: PokeInfo }
    ]
  },
  { path: '*', Component: NotFoundPage }
]
