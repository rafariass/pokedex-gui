import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const initialState = {}

const usePokedexStore = create(
  devtools(
    persist(
      (set, get) => ({
        ...initialState
      }),
      { name: 'pokedex-cache' }
    )
  )
)

export default usePokedexStore
