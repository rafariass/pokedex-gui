import { useParams } from 'react-router'

const PokeInfo = () => {
  const { id } = useParams()

  return (
    <div>PokeInfo {id}</div>
  )
}

export default PokeInfo
