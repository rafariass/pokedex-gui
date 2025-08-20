import AppRouter from '@/routers/AppRouter'
import PokePreLoad from '@/shared/components/PokePreLoad'
import usePokedexStore from '@/stores/usePokemonStore'

const Pokedex = () => {
  const { isPreloaded } = usePokedexStore()

  if (isPreloaded === true) {
    return <PokePreLoad />
  }

  return <AppRouter />
}

export default Pokedex
