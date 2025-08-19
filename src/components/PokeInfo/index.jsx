import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'

import PokeLoader from '@/shared/components/PokeLoader'
import usePokemonDetails from '@/hooks/usePokemonDetails'
import { ColorPicker } from '@/helpers/pokemon-color-picker'

const PokeInfo = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { isLoading, isError, error, data } = usePokemonDetails(id)

  useEffect(() => {
    if (isError) {
      console.error(error?.message)
      navigate('/error', { replace: true })
    }
  }, [isError, error])

  if (isLoading === true) {
    return <PokeLoader />
  }

  const colorBase = ColorPicker.byType(data.types[0].type.name)

  console.log('Error -> Message:', error?.message)
  console.log('Data:', data)

  return (
    <div className='w-full max-w-[95dvw] bg-white rounded-xl shadow-lg overflow-x-hidden'>
      <div className='bg-pokemon p-4 md:p-12 text-center' style={{ backgroundColor: `${colorBase}4d` }}>

        Pokemon <span className='!font-bold capitalize underline'>{data.name}</span> Info

      </div>
    </div>
  )
}

export default PokeInfo
