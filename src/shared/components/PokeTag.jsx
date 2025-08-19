import { ColorPicker } from '@/helpers/pokemon-color-picker'

const PokeTag = ({ id, types, className }) => {
  return (
    <div className={`w-full flex flex-col md:flex-row gap-1 text-white ${className}`}>
      {types?.map(({ type }) => (
        <span
          key={`${id}-${type?.name}`}
          className='poke-tag'
          style={{ background: `${ColorPicker.byType(type.name)}b3` }}
        >
          {type?.name}
        </span>
      ))}
    </div>

  )
}

export default PokeTag
