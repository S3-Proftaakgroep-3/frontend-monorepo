import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Customers</title>
        <meta name="description" content="This is for the customers in the restaurant, here they can order food and eat." />
        <link rel="icon" href="burger.ico" />
      </Head>
    </div>
  )
}

export default Home
