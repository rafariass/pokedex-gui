import { createHashRouter } from 'react-router'

import { publicRoutes } from '@/routers/public/publicRoutes'

export const router = createHashRouter([
  ...publicRoutes
])
