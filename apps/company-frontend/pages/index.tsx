import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {IRestaurant, OrderCard,} from 'ui'
import * as React from "react";
import {ICartItem} from "ui/Interfaces/ICartItem";
import {useEffect, useState} from "react";

interface ContextTypes {
    query: any
}

export async function getServerSideProps({ query }: ContextTypes) {

    // Query
    const restaurantId = query.restaurant

    // Fetch
    const res = await fetch(`https://mdma-order-service.herokuapp.com/api/order/${restaurantId}/all`)
    const data = await res.json()

    return {
        props: {
            orders: data as ICartItem
        }
    }
}

const Home: NextPage = () => {

    const [order, setOrder] = useState<any[]>([])

    const getOrder = async() => {
        const orders = await fetch('https://mdma-order-service.herokuapp.com/api/order/all')
        const data = await orders.json()
        setOrder(data)
        console.log(order)
    }

  return (
        <div id={styles.page}>
            {
                order.map((orderItem: ICartItem, key: number) => {
                    return <OrderCard key={key} item={orderItem}/>
                })
            }
        </div>
    )
}

export default Home
