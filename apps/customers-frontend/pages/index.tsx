import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import * as React from "react";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Customers</title>
                <meta name="description"
                      content="This is for the customers in the restaurant, here they can order food and eat."/>
                <link rel="icon" href="burger.ico"/>
            </Head>
        </div>
    )
}

export default Home
