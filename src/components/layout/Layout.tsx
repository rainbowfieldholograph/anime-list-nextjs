import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'
import styles from './Layout.module.scss'

export const Layout: FC = (): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.container}>
        <Outlet />
      </main>
      <Footer className={styles.container}>xnsvf</Footer>
    </div>
  )
}
