import type { NextPage } from 'next'
import {CompanyOrderCard} from "ui/Components/Atoms/companyOrderCard";
import * as React from "react";
import {IOrder} from "ui/Interfaces/IOrder";
import {useEffect, useState} from "react";
import {IRestaurant} from "ui";

interface ContextTypes {
    query: any
}

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

const Home: NextPage<PropTypes> = ( {restaurant}: PropTypes ) => {

    const restaurantId = restaurant.id
    const [order, setOrder] = useState<any[]>([])

    const getOrder = async() => {
        const orders = await fetch(`https://mdma-order-service.herokuapp.com/api/order/${restaurantId}/all`)
        const data = await orders.json()
        setOrder(data)
        console.log(order)
    }

    useEffect(() => {
        getOrder()
    }, [])

    return (
        <div>
            {
                order.map((order: IOrder, key: number) => {
                    return <CompanyOrderCard key={key} order={order}/>
                })
            }
        </div>
    )
}

export default Home