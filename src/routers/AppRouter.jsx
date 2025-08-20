import { createBrowserRouter, RouterProvider } from 'react-router'

import { publicRoutes } from '@/routers/public/publicRoutes'

const AppRouter = () => {
  // createHashRouter or createBrowserRouter
  const router = createBrowserRouter([...publicRoutes])

  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter
