import SearchIcon from '../../public/search.svg';
import { SearchProps } from './Search.props';
import styles from './Search.module.scss';

export const Search = ({}: SearchProps): JSX.Element => {
  return (
    <label className={styles.wrapper}>
      <SearchIcon className={styles.icon} />
      <input placeholder="Поиск..." className={styles.input} type="search" />
    </label>
  );
};
