import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const PokeStats = ({ colorBase, stats }) => {
  const chartConfig = {
    stat: { label: 'Stat' }
  }

  return (
    <div className='w-full text-center mt-5'>
      <h2 className='poke-about-title' style={{ color: `${colorBase}b3` }}>Base Stats</h2>
      <div className='flex flex-col md:flex-row justify-center items-center p-3'>
        <ChartContainer
          config={chartConfig}
          className='w-full max-w-[300px] md:max-w-full h-full max-h-[200px] md:max-h-[400px] mx-auto aspect-square'
        >
          <RadarChart data={stats}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey='stat' />
            <PolarGrid gridType='polygon' />
            <Radar
              dataKey='current'
              fill={`${colorBase}4b`}
              fillOpacity={1}
              isAnimationActive={false}
            />
          </RadarChart>
        </ChartContainer>
      </div>
    </div>
  )
}

export default PokeStats
