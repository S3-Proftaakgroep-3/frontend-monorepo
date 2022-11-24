import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {CompanyOrderCard} from "ui/Components/Atoms/companyOrderCard";
import * as React from "react";
import {IOrder} from "ui/Interfaces/IOrder";
import {useEffect, useState} from "react";

interface ContextTypes {
    query: any
}

export async function getServerSideProps({ query }: ContextTypes) {

    // Query
    const restaurantId = query.restaurant

    // Fetch
    const res = await fetch(`https://mdma-order-service.herokuapp.com/api/order/634d19164de0297c8b68ba66/all`)
    const data = await res.json()

    return {
        props: {
            orders: data as IOrder
        }
    }
}

const Home: NextPage = () => {

    const [order, setOrder] = useState<any[]>([])

    const getOrder = async() => {
        const orders = await fetch('https://mdma-order-service.herokuapp.com/api/order/634d19164de0297c8b68ba66/all')
        const data = await orders.json()
        setOrder(data)
        console.log(order)
    }

    useEffect(() => {
        getOrder()
    }, [])

  return (
        <div id={styles.page}>
            {
                order.map((order: IOrder, key: number) => {
                    return <CompanyOrderCard key={key} order={order}/>
                })
            }
        </div>
    )
}

export default Home
