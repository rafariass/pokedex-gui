import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const initialState = {
  types: [],
  generations: [],
  isPreloaded: true
}

const usePokedexStore = create(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        setIsPreloaded: (value = true) => set({ isPreloaded: value }),
        setupData: ({ types, generations }) => set({ types, generations })
      }),
      { name: 'pokedex-cache' }
    )
  )
)

export default usePokedexStore
