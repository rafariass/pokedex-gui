import { useRef, useState, useEffect } from 'react'
import Autoplay from 'embla-carousel-autoplay'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

const PokeLores = ({ colorBase, lores }) => {
  const [api, setApi] = useState()
  const counterRef = useRef(null)
  const plugin = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true
    })
  )

  useEffect(() => {
    if (!api) return

    const updateCounter = () => {
      const index = api.selectedScrollSnap()
      if (counterRef.current) {
        counterRef.current.textContent = `${index + 1} / ${lores.length}`
      }
    }

    updateCounter()
    api.on('select', updateCounter)
    api.on('reInit', updateCounter)

    return () => {
      api.off('select', updateCounter)
      api.off('reInit', updateCounter)
    }
  }, [api])

  if (lores.length === 0) return <></>

  return (
    <div className='w-full flex flex-col justify-center items-center pt-4'>
      <Carousel
        opts={{ align: 'start', loop: true }}
        setApi={setApi}
        plugins={[plugin.current]}
        className='w-full max-w-2xl'
      >
        <CarouselContent>
          {lores.map((lore, index) => (
            <CarouselItem key={`lore-${Number(index)}`}>
              <div className='poke-carousel-lores' style={{ background: `${colorBase}4d` }}>
                <p className='text-sm'>{lore}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div ref={counterRef} className='text-muted-foreground py-2 text-center text-sm' />
    </div>
  )
}

export default PokeLores
