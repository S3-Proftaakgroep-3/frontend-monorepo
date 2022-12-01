import { NextPage } from "next"
import styles from '../../styles/dashboard.module.css'
import { NavBar, FullOrderCard } from "ui/Components"
import {ICartItem} from "ui/Interfaces/ICartItem";
import {useEffect, useState} from "react";
import {IRestaurant} from "ui";
import {IOrder} from "ui/Interfaces/IOrder";
import {SectionProductsPerOrder} from "ui/Components/Molecules/sectionProductsPerOrder";
import * as React from "react";

const fakeOrder = {
    table: 18,
    time: '5min ago'
}

const Ready: NextPage = () => {

    const urlEndpoint = "https://mdma-order-service.herokuapp.com/api/order/subscribe";
    let eventSource = null;
    const [orders, setOrders] = useState<any[]>([]);

    useEffect(() => {
        eventSource = new EventSource(urlEndpoint);

        eventSource.addEventListener("Latest's Orders", (event) => {
            setOrders(JSON.parse(event.data))
        })
    }, [])

    return (
        <>
            <main id={styles.cardsContainer}>
                {
                    orders != null && orders.length > 0 &&
                    orders.map((order: IOrder, key: number) => {
                        return <FullOrderCard key={key} fakeOrder={order}/>
                    })
                }
            </main>
            <NavBar/>
        </>
    )
}

export default Ready