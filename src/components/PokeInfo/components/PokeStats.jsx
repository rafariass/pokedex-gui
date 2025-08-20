import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

import PokeBarChart from '@/components/PokeInfo/components/PokeCharts/PokeBarChart'
import PokeRadarChart from '@/components/PokeInfo/components/PokeCharts/PokeRadarChart'
import { useState } from 'react'

const PokeStats = ({ colorBase, stats }) => {
  const [isRadarChart, setIsRadarChart] = useState(true)

  return (
    <div className='w-full text-center mt-5'>
      <h2 className='poke-about-title' style={{ color: `${colorBase}b3` }}>Base Stats</h2>
      <div className='flex flex-col justify-center items-center py-3'>
        <div className='flex items-center space-x-5 pb-5'>
          <Label htmlFor='chart-mode'>Bar Chart</Label>
          <Switch
            id='chart-mode'
            className='w-16 [&>span]:w-8 h-8 [&>span]:h-8'
            style={{ backgroundColor: `${colorBase}b3` }}
            checked={isRadarChart}
            onCheckedChange={() => setIsRadarChart((value) => !value)}
          />
          <Label htmlFor='chart-mode'>Radar Chart</Label>
        </div>
        <div className='flex justify-center items-center w-full max-w-[500px] aspect-square '>
          {isRadarChart
            ? (<PokeRadarChart stats={stats} colorBase={colorBase} />)
            : (<PokeBarChart stats={stats} colorBase={colorBase} />)}
        </div>
      </div>
    </div>
  )
}

export default PokeStats
