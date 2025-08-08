import { createHashRouter } from 'react-router'
import { publicRoutes } from './public/publicRoutes'

export const router = createHashRouter([
  ...publicRoutes
])
