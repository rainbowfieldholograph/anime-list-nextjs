import { News } from '../../components/News';
import { PopularNow } from '../../components/PopularNow';
import { Tooltip } from '../../components/Tooltip';
import { HomePageProps } from './HomePage.props';

export const HomePage = ({ currentSeasonAnimes }: HomePageProps): JSX.Element => {
  return (
    <>
      <PopularNow data={currentSeasonAnimes} />
      <News />
      <Tooltip>
        <Tooltip.Target aria-describedby="tooltip">Hover me</Tooltip.Target>
        <Tooltip.Content id="tooltip">Hello, im tooltip</Tooltip.Content>
      </Tooltip>
    </>
  );
};
