import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import * as React from "react";
import {HorizontalFoodCard} from "ui/Components/Atoms/horizontalFoodCard";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Customers</title>
                <meta name="description"
                      content="This is for the customers in the restaurant, here they can order food and eat."/>
                <link rel="icon" href="burger.ico"/>
            </Head>
            <HorizontalFoodCard/>
        </div>
    )
}

export default Home
