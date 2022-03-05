import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Green Test API</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Green 
        </h1>

        <p className={styles.description}>
          Get Employee: /api/employee{' '}
        </p>

        <p className={styles.description}>
          Post Employee: /api/employee{' '}
        </p>

        <p className={styles.description}>
          Put Employee: /api/updateEmployee{' '}
        </p>

        <p className={styles.description}>
          Delete Employee: /api/deleteEmployee{' '}
        </p>
      </main>
    </div>
  )
}
