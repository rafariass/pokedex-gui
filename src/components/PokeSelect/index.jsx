import { useNavigate } from 'react-router'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import usePokedexStore from '@/stores/usePokemonStore'

const PokeSelect = ({ category }) => {
  const navigate = useNavigate()
  const { types, generations } = usePokedexStore((state) => state)

  const handleChange = (value) => {
    const [category, id] = value.split('-')
    navigate(`/pokemons/gallery?${category}=${id}`)
  }

  return (
    <div className='w-full flex flex-wrap justify-center items-center gap-5 mx-4 my-10'>
      <span>Buscar por:</span>
      <Select defaultValue={`${category?.type}-${category?.id}`} onValueChange={handleChange}>
        <SelectTrigger className='max-w-[400px] min-w-[250px] bg-white'>
          <SelectValue placeholder='Select a fruit' />
        </SelectTrigger>
        <SelectContent>
          {category?.type === 'generation' && (
            <SelectGroup>
              <SelectLabel>By Generation</SelectLabel>
              {generations?.map(({ id, name }) => (
                <SelectItem key={`generation-${id}`} value={`generation-${id}`}>{name}</SelectItem>
              ))}
            </SelectGroup>
          )}
          {category?.type === 'type' && (
            <SelectGroup>
              <SelectLabel>By Type</SelectLabel>
              {types?.map(({ id, name }) => (
                <SelectItem key={`type-${id}`} value={`type-${id}`}>{name}</SelectItem>
              ))}
            </SelectGroup>
          )}
        </SelectContent>
      </Select>
    </div>
  )
}

export default PokeSelect
