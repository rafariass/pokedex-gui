import { Fragment } from 'react'
import { Link } from 'react-router'
import { House } from 'lucide-react'

import usePokeRoute from '@/hooks/usePokeRoute'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'

const PokeBreadcrumb = () => {
  const { isError, fromPath, paths, queryKey } = usePokeRoute()

  if (isError) return <></>

  return (
    <Breadcrumb className='mb-10 bg-white py-2 px-4 rounded-xl'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link to='/pokemons' className='flex justify-center items-center gap-2'>
            <House strokeWidth={1} />
            Pokemons
          </Link>
        </BreadcrumbItem>
        {paths?.map((element, index, arr) => {
          if (paths[index] === 'pokemons') return undefined
          if (index !== arr.length - 1) {
            return (
              <Fragment key={element}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <Link to={fromPath} className='capitalize'>{paths[index]}</Link>
                </BreadcrumbItem>
              </Fragment>
            )
          } else {
            return (
              <Fragment key={element}>
                <BreadcrumbSeparator />
                <BreadcrumbItem className='first-letter:uppercase'>
                  <span className='capitalize'>
                    {paths[index]} {queryKey && `/ ${queryKey}`}
                  </span>
                </BreadcrumbItem>
              </Fragment>
            )
          }
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default PokeBreadcrumb
