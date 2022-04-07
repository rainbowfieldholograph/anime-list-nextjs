import { HeadingLine } from '../HeadingLine';
import { NewsProps } from './News.props';
import styles from './News.module.scss';

export const News = ({}: NewsProps): JSX.Element => {
  return (
    <section>
      <HeadingLine className={styles.head}>News</HeadingLine>
      <ul className={styles.list}></ul>
    </section>
  );
};
