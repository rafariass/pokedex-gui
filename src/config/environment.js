import { QueryClient } from '@tanstack/react-query'

export const enableMocking = async () => {
  if (process.env.NODE_ENV !== 'development') {
    return
  }

  const { worker } = await import('../../mocks/browser')
  return worker.start()
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      retryDelay: 500,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false
    }
  }
})
