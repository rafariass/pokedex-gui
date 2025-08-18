import { useNavigate } from 'react-router'
import { ChevronLeft, ChevronsLeft, ChevronRight, ChevronsRight } from 'lucide-react'

import { Pagination, PaginationContent, PaginationItem } from '@/components/ui/pagination'
import { Button } from '@/components/ui/button'

const PokePagination = ({ pagination }) => {
  const navigate = useNavigate()

  return (
    <Pagination className='my-10 md:mb-0 text-sm md:text-base'>
      <PaginationContent>

        <PaginationItem>
          <Button
            className='cursor-pikachu'
            onClick={() => navigate(pagination?.fullPrevious)}
            disabled={pagination?.page === 1}
          >
            <ChevronsLeft />
          </Button>
        </PaginationItem>

        <PaginationItem>
          <Button
            className='cursor-pikachu'
            onClick={() => navigate(pagination?.previous)}
            disabled={pagination?.page === 1}
          >
            <ChevronLeft />
          </Button>
        </PaginationItem>

        <PaginationItem className='px-2'>
          Página {pagination?.page} de {pagination?.pages}
        </PaginationItem>

        <PaginationItem>
          <Button
            className='cursor-pikachu'
            onClick={() => navigate(pagination?.next)}
            disabled={pagination?.page === pagination?.pages}
          >
            <ChevronRight />
          </Button>
        </PaginationItem>

        <PaginationItem>
          <Button
            className='cursor-pikachu'
            onClick={() => navigate(pagination?.fullNext)}
            disabled={pagination?.page === pagination?.pages}
          >
            <ChevronsRight />
          </Button>
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  )
}

export default PokePagination
