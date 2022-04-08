import { FC } from 'react';
import { ContentPageProps } from './AnimeDetailsPage.props';
import styles from './AnimeDetailsPage.module.scss';
import Image from 'next/image';
import Head from 'next/head';
import { HeadingLine } from '../../components/HeadingLine';
import imageLoader from '../../image-loader';

export const AnimeDetailsPage: FC<ContentPageProps> = ({ data }) => {
  if (!data) return <h1>loading...</h1>;

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className={styles.wrapper}>
        <h1>{data.title}</h1>
        <div className={styles.inner}>
          <div className={styles.poster}>
            <Image
              loader={imageLoader}
              unoptimized
              width="225"
              height="320"
              src={data.images.webp.image_url}
              alt={data.title}
              placeholder="empty"
            />
          </div>
          <div className={styles.information}>
            <h2>Information</h2>
            <p>Type: {data.type}</p>
            <p>Episodes: {data.episodes ?? 'unknown'}</p>
            <p>Status: {data.status}</p>
            <span className={styles.genres}>
              Genres:
              {data.genres.map((genre) => (
                <span key={genre.mal_id} className={styles.genre}>
                  {genre.name}
                </span>
              ))}
            </span>
            <p>Rating: {data.rating}</p>
            <p>
              Licensors:{' '}
              {data.licensors.length > 0
                ? data.licensors.map((licensor) => (
                    <span key={licensor.mal_id}>{licensor.name}</span>
                  ))
                : 'unknown'}
            </p>
            <span className={styles.genres}>
              Synonyms:{' '}
              {data.title_synonyms.map((alterTitle) => (
                <span key={alterTitle} className={styles.alterTitle}>
                  {alterTitle}
                </span>
              ))}
            </span>
          </div>
          <div className={styles.rating}>Rating</div>
          <aside className={styles.menu}>hello</aside>
          <div className={styles.description}>
            <HeadingLine>
              <h2>Description</h2>
            </HeadingLine>
            <p>{data.synopsis}</p>
          </div>
        </div>
      </div>
    </>
  );
};
