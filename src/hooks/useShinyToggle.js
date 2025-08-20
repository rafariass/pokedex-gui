import { useState } from 'react'

export const useShinyToggle = () => {
  const [isShiny, setIsShiny] = useState(false)
  const handleShiny = () => setIsShiny((value) => !value)

  return { isShiny, handleShiny }
}

export default useShinyToggle
