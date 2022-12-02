import { NextPage } from "next"
import styles from '../../styles/dashboard.module.css'
import { NavBar, FullOrderCard } from "ui/Components"
import {ICartItem} from "ui/Interfaces/ICartItem";
import {useEffect, useState} from "react";
import {IRestaurant} from "ui";
import {IOrder} from "ui/Interfaces/IOrder";
import {SectionProductsPerOrder} from "ui/Components/Molecules/sectionProductsPerOrder";
import * as React from "react";

export async function getServerSideProps({ query }: ContextTypes) {

    // Query
    const restaurantId = query.restaurant

    // Fetch
    const res = await fetch(`https://mdma-restaurant-service.herokuapp.com/api/restaurant/get?id=${restaurantId}`)
    const data = await res.json()

    return {
        props: {
            restaurant: data as IRestaurant
        }
    }
}

interface PropTypes {
    restaurant: IRestaurant
}

const Ready: NextPage<PropTypes> = ( {restaurant}: PropTypes ) => {

    const urlEndpoint = `https://localhost:8080/api/order/subscribe/${restaurant.id}`;
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