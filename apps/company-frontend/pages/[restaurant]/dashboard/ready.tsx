import { NextPage } from "next"
import styles from '../../../styles/dashboard.module.css'
import { NavBar } from "ui/Components"
import * as React from "react";

const Ready: NextPage = () => {
    return (
        <>
            <main id={styles.cardsContainer}>
                <p>No orders marked as ready yet.</p>
            </main>
            <NavBar/>
        </>
    )
}

export default Ready