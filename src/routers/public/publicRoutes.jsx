import { lazy } from 'react'

const HomePage = lazy(() => import('@/pages/Home'))
const Pokemons = lazy(() => import('@/pages/Pokemons'))
const NotFoundPage = lazy(() => import('@/pages/NotFound'))
const PokeGallery = lazy(() => import('@/components/PokeGallery'))
const PokeInfo = lazy(() => import('@/components/PokeInfo'))
const PokePrompt = lazy(() => import('@/shared/components/PokePrompt'))

export const publicRoutes = [
  { path: '/', Component: HomePage },
  {
    path: '/pokemons',
    Component: Pokemons,
    children: [
      { index: true, Component: PokePrompt },
      { path: 'gallery', Component: PokeGallery },
      { path: 'pokemon/:id', Component: PokeInfo }
    ]
  },
  { path: '*', Component: NotFoundPage }
]
