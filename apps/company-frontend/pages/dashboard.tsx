import { NextPage } from "next"
import styles from '../styles/dashboard.module.css'
import { NavBar, FullOrderCard } from "ui/Components"
import {ICartItem} from "ui/Interfaces/ICartItem";

const fakeOrder = {
    table: 18,
    time: '5min ago'
}

const Dashboard: NextPage = () => {
    return (
        <>
            <main id={styles.cardsContainer}>
                <FullOrderCard fakeOrder={fakeOrder}/>
            </main>
            <NavBar/>
        </>
    )
}

export default Dashboard