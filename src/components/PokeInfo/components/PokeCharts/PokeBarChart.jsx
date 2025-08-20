import { Bar, BarChart, XAxis, YAxis, LabelList } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const PokeBarChart = ({ stats, colorBase }) => {
  const chartConfig = {
    stat: { label: 'Stat' }
  }

  return (
    <ChartContainer config={chartConfig} className='poke-bar-chart'>
      <BarChart
        accessibilityLayer
        data={stats}
        layout='vertical'
        className='pt-8 md:pt-0'
        margin={{ right: 36 }}
      >
        <YAxis dataKey='stat' type='category' hide />
        <XAxis dataKey='current' type='number' hide />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator='line' />} />
        <Bar dataKey='current' layout='vertical' fill={`${colorBase}4b`} radius={4}>
          <LabelList dataKey='stat' position='insideLeft' offset={15} fontSize={12} />
          <LabelList dataKey='current' position='right' offset={8} className='fill-foreground' fontSize={12} />
        </Bar>
      </BarChart>
    </ChartContainer>
  )
}

export default PokeBarChart
