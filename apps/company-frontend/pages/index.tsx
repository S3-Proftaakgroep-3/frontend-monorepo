import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { CategoryBtn } from 'ui'
import * as React from "react";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Company</title>
        <meta name="description" content="This is the backend for restaurants, they can modify their application here." />
        <link rel="icon" href="burger.ico" />
      </Head>
        <CategoryBtn label='test' active={true} onClick={() => {}}/>
    </div>
  )
}

export default Home
