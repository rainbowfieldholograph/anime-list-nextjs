import { useEffect, useState } from 'react';
import { News } from '../../components/News';
import { PopularNow } from '../../components/PopularNow';
import { Tooltip } from '../../components/Tooltip';
import { getCurrentSeasonAnime } from '../../helpers/api';
import { IAnime } from '../../interfaces/anime.interface';

export const HomePage = (): JSX.Element => {
  const [data, setData] = useState<IAnime[]>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCurrentSeasonAnime();
      setData(data);
    };
    fetchData();
  }, []);

  if (!data) return <></>;

  return (
    <>
      <PopularNow data={data} />
      <News />
      <Tooltip>
        <Tooltip.Target aria-describedby="tooltip">Hover me</Tooltip.Target>
        <Tooltip.Content id="tooltip">Hello, im tooltip</Tooltip.Content>
      </Tooltip>
    </>
  );
};
