import { useParams } from 'react-router'

const PokeGallery = () => {
  const { category } = useParams()

  return (
    <div>PokeGallery {category}</div>
  )
}

export default PokeGallery
