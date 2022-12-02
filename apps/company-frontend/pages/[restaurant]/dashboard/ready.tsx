import { NextPage } from "next"
import styles from '../../../styles/dashboard.module.css'
import { NavBar, FullOrderCard } from "ui/Components"
import {ICartItem} from "ui/Interfaces/ICartItem";
import {useEffect, useState} from "react";
import {IRestaurant} from "ui";
import {IOrder} from "ui/Interfaces/IOrder";
import {SectionProductsPerOrder} from "ui/Components/Molecules/sectionProductsPerOrder";
import * as React from "react";
import {useRouter} from "next/router";



const Ready: NextPage = () => {
    const router = useRouter();
    const [pathName, setPathName] = useState<string | undefined>(undefined);
    useEffect(() => {
        if (router.isReady) {
            
            const path = Array.isArray(router.query.restaurant) ? router.query.restaurant[0] : router.query.restaurant
            
            if (path) {
                setPathName(path)
            }
            
        }
    }, [router.isReady])
    
    
    const [orders, setOrders] = useState<any[]>([]);

    useEffect(() => {
        if (pathName) {
            const urlEndpoint = `http://localhost:8080/api/order/subscribe/${pathName}`;
            let eventSource = new EventSource(urlEndpoint);

            eventSource.addEventListener("Latest's Orders", (event) => {
                setOrders(JSON.parse(event.data))
            })
        }
    }, [pathName])

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