import { createBrowserRouter } from 'react-router'

import { publicRoutes } from '@/routers/public/publicRoutes'

// createHashRouter or createBrowserRouter
export const router = createBrowserRouter([...publicRoutes])
