import { Fragment, useEffect } from 'react'
import { Link, useLocation, useSearchParams, useNavigate } from 'react-router'

import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { House } from 'lucide-react'

const PokeBreadcrumb = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    if (searchParams.has('type') && searchParams.has('generation')) {
      console.error('Búsqueda inválida: Debes indicar al menos un tipo o una generación, pero no ambos al mismo tiempo.')
      navigate('/error', { replace: true })
    }
  }, [searchParams, navigate])

  const paths = location.pathname.split('/').filter(Boolean)
  const keys = [...searchParams.keys()]
  const queryKey = keys.find(k => k === 'type' || k === 'generation')

  return (
    <Breadcrumb className='mb-10 bg-white py-2 px-4 rounded-xl'>
      <BreadcrumbList>

        <BreadcrumbItem>
          <House strokeWidth={1} />
        </BreadcrumbItem>

        {paths?.map((element, index, arr) => {
          if (index === arr.length - 1) {
            return (
              <Fragment key={element}>
                <BreadcrumbSeparator />
                <BreadcrumbItem className='first-letter:uppercase'>
                  <span className='first-letter:uppercase'>
                    {paths[index]} {queryKey && `/ ${queryKey}`}
                  </span>
                </BreadcrumbItem>
              </Fragment>
            )
          } else {
            return (
              <Fragment key={element}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {paths[index] === 'pokemon'
                    ? (<span onClick={() => navigate(-1)} className='first-letter:uppercase'>{paths[index]}</span>)
                    : (<Link to={`/${paths[index]}`} className='first-letter:uppercase'>{paths[index]}</Link>)}
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
