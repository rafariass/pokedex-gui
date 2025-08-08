import './main.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { enableMocking } from './config/environment'
import { RouterProvider } from 'react-router'
import { router } from './routers/AppRouter'

const renderApp = () => {
  const rootElement = document.getElementById('root')
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}

enableMocking()
  .then(renderApp)
  .catch(console.error)
