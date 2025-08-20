import { useLocation, useSearchParams } from 'react-router'

const usePokeRoute = () => {
  const [searchParams] = useSearchParams()
  const isError = searchParams.has('type') && searchParams.has('generation')

  if (isError === true) return { isError }

  const location = useLocation()
  const fromPath = location?.state?.from || '/pokemons'

  const paths = location.pathname.split('/').filter(Boolean)
  const keys = [...searchParams.keys()]
  const queryKey = keys.find(k => k === 'type' || k === 'generation')

  return { fromPath, paths, queryKey }
}

export default usePokeRoute
