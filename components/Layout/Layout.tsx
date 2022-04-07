import { FC } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from './Layout.module.scss';

export const Layout: FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.container}>
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};
