import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const initialState = {
  types: [],
  generations: []
}

const usePokedexStore = create(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        setupData: ({ types, generations }) => set({ types, generations })
      }),
      { name: 'pokedex-cache' }
    )
  )
)

export default usePokedexStore
