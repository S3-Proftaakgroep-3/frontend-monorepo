import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {DefaultButton} from "../../../packages/ui/Componenst/Atoms/Buttons/DefaultButton";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Company</title>
        <meta name="description" content="This is the backend for restaurants, they can modify their application here." />
        <link rel="icon" href="burger.ico" />
      </Head>
        <DefaultButton buttonText={"Hello"}/>
    </div>
  )
}

export default Home
