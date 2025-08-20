import '@/main.css'

import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { enableMocking, queryClient } from '@/config/environment'
import Pokedex from '@/Pokedex'

const renderApp = () => {
  const rootElement = document.getElementById('root')
  createRoot(rootElement).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={null}>
          <Pokedex />
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
  )
}

enableMocking()
  .then(renderApp)
  .catch(console.error)
