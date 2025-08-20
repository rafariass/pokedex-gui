import POKEMON_STATS_MAPPING from '@/constants/pokemonStats'

const formatPokemonStats = (stats = []) => {
  return stats?.map((stat) => ({
    current: stat.base_stat,
    stat: POKEMON_STATS_MAPPING[stat.stat.name] || stat.name
  }))
}

export default formatPokemonStats
