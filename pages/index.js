import styles from '../styles/Home.module.css'

//Import of components
import { Head } from '../components/head'
import { Header } from '../components/header'
import { GridMain } from '../components/GridMain'
import { Footer } from '../components/footer'

export default function Home() {
  return (
    <div className={styles.page_container}>
      <Head />

      <main className={styles.main}>
        <Header />

        <GridMain />
      </main>

      <Footer />
    </div>
  )
}
