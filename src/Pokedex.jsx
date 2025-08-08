import { StrictMode, Suspense } from 'react'
import { RouterProvider } from 'react-router'
import { router } from './routers/AppRouter'

const Pokedex = () => {
  return (
    <StrictMode>
      <Suspense fallback={null}>
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>
  )
}

export default Pokedex
