import { useParams } from 'react-router'

import usePokemonDetails from '@/hooks/usePokemonDetails'

const PokeInfo = () => {
  const { id } = useParams()
  const { isLoading, isError, error, data } = usePokemonDetails(id)

  return (
    <div className=''>
      PokeInfo {id} <br />
      isLoading: {isLoading} <br />
      isError: {isError} <br />
      ---- <br />
      error:
      <pre className='bg-gray-800 text-white p-4 rounded overflow-x-scroll'>
        <code>
          {JSON.stringify(error?.message, null, 2)} <br />
        </code>
      </pre>
      --- <br />
      Data:
      <pre className='bg-gray-800 text-white p-4 rounded overflow-x-scroll'>
        <code>
          {JSON.stringify(data, null, 2)} <br />
        </code>
      </pre>
    </div>
  )
}

export default PokeInfo
