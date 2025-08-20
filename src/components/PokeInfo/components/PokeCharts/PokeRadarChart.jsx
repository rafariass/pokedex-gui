import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const PokeRadarChart = ({ stats, colorBase }) => {
  const chartConfig = {
    stat: { label: 'Stat' }
  }

  return (
    <ChartContainer config={chartConfig} className='poke-radar-chart'>
      <RadarChart data={stats}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <PolarAngleAxis dataKey='abbr' />
        <PolarGrid gridType='polygon' />
        <Radar dataKey='current' fill={`${colorBase}4b`} fillOpacity={1} />
      </RadarChart>
    </ChartContainer>
  )
}

export default PokeRadarChart
