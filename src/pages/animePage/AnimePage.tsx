import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IAnime } from '../../interfaces/anime.interface'
import { IGetAnimeByIdResponse } from '../../interfaces/getAnimeByIdResponse.interface'
import { AnimePageProps } from './AnimePage.props'
import styles from './AnimePage.module.scss'

export const AnimePage: FC = ({}: AnimePageProps): JSX.Element => {
  const { id } = useParams()
  const [animeData, setAnimeData] = useState<IAnime | null>(null)

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${id}`)
      .then((response) => response.json())
      .then((data: IGetAnimeByIdResponse) => setAnimeData(data.data))
  }, [])

  console.log(useParams())
  console.log(animeData)

  if (!animeData) return <h1>loading...</h1>

  return (
    <>
      <h1>{animeData.title}</h1>
      <img src={animeData.images.webp.image_url} alt="" />
      <section>
        <h2>Information</h2>
        <p>Type: {animeData.type}</p>
        <p>Episodes: {animeData.episodes ? animeData.episodes : 'unknown'}</p>
        <p>Status: {animeData.status}</p>
        <span className={styles.genres}>
          Genres:
          {animeData.genres.map((genre) => (
            <span key={genre.mal_id} className={styles.genre}>
              {genre.name}
            </span>
          ))}
        </span>
        <p>Rating: {animeData.rating}</p>
        <p>
          Licensors:{' '}
          {animeData.licensors.length > 0
            ? animeData.licensors.map((licensor) => (
                <span key={licensor.mal_id}>{licensor.name}</span>
              ))
            : 'unkonown'}
        </p>
        <span className={styles.genres}>
          Synonyms:{' '}
          {animeData.title_synonyms.map((alterTitle) => (
            <span className={styles.alterTitle}>{alterTitle}</span>
          ))}
        </span>
      </section>
      <section>
        <h2>Description</h2>
        <p>{animeData.synopsis}</p>
      </section>
    </>
  )
}
