import * as React from "react";
import {NextPage} from "next";
import styles from "../styles/Home.module.css";
import {NewOrderMenu} from "ui/Components/Molecules/newOrderMenu";
import {OrderCard} from "ui";
import {useEffect, useState} from "react";


interface ContextTypes {
    query: any
}

export async function getServerSideProps({ query }: ContextTypes) {

    // Query
    const restaurantId = query.restaurant
    const itemId = query.item

    // Fetch
    const res = await fetch(`https://mdma-restaurant-service.herokuapp.com/api/restaurant/get/product?restaurantId=${restaurantId}&id=${itemId}`)
    const data = await res.json()

    return {
        props: {
            item: data
        }
    }
}

interface PropTypes {
    item: any
}

const orderPage: NextPage<PropTypes> = ({ item }: PropTypes) => {

    const [orderItems, setOrderItems] = useState()

    useEffect(() => {
        const cs = localStorage.getItem('order')

        if (cs != null) {
            const order = JSON.parse(cs)


        }
    }, [])
    return(
        <div className={styles.page}>
            <OrderCard title={"Pizza Pepperoni"} price={19.99} quantity={5}/>
            <div className={styles.orderMenu}>
                <NewOrderMenu price={99.95}/>
            </div>
        </div>
    )
}
