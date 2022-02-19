import { FC } from 'react'
import { News } from '../../components/news/News'
import { PopularNow } from '../../components/popularNow/PopularNow'

export const Home: FC = (): JSX.Element => {
  return (
    <>
      <PopularNow />
      <News />
    </>
  )
}
