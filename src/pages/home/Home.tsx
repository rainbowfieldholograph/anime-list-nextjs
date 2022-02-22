import { FC } from 'react'
import { News } from '../../components/randomContent/RandomContent'
import { PopularNow } from '../../components/popularNow/PopularNow'
import { Tooltip } from '../../components/tooltip/Tooltip'

export const Home: FC = (): JSX.Element => {
  return (
    <>
      <PopularNow />
      <News />
      <Tooltip>
        <Tooltip.Target aria-describedby="tooltip">Hover me</Tooltip.Target>
        <Tooltip.Content id="tooltip">Hello, im tooltip</Tooltip.Content>
      </Tooltip>
    </>
  )
}
