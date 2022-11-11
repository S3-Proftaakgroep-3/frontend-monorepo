import type {NextPage} from 'next'
import * as React from "react";
import styles from '../../styles/item.module.css'
import {NewOrderMenu, OrderCard, TopNavigation} from 'ui';
import {ICartItem} from "ui/Interfaces/ICartItem";
import {useEffect, useState} from "react";
import {IOrder} from "ui/Interfaces/IOrder";


const Index: NextPage<null> = () => {
    const [order, setOrder] = useState<any[]>([])
    const [totalPrice, setTotalPrice] = useState(0);
    
    useEffect(() => {
        setOrder(JSON.parse(localStorage.getItem("order")!))
    }, [])
    
    useEffect(() => {
        let productPrice = 0;
        for (let i = 0; i < order.length; i++) {
            productPrice += (order[i].price * order[i].quantity);
        }
        setTotalPrice(productPrice);
    }, [order])
    
    const createOrder = async () => {
        let newOrder: IOrder
        
        newOrder = {
            tableId: sessionStorage.getItem("tableId")!,
            restaurantId: sessionStorage.getItem("restaurantId")!,
            productList: order,
            orderStatus: "Received"
        }
        
        await postOrder(newOrder)
    }

    const postOrder = async (order: IOrder) => {
        const rawResponse = await fetch(`https://mdma-order-service.herokuapp.com/api/order/create`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        console.log(rawResponse)
    }
    
    return (
        <div id={styles.page}>
            <TopNavigation/>
            {
                order.map((orderItem: ICartItem, key: number) => {
                    return <OrderCard key={key} title={orderItem.name} price={orderItem.price} quantity={orderItem.quantity}/>
                })
            }
            <NewOrderMenu onClick={async () => {await createOrder()}} price={totalPrice}/>
        </div>
    )
}

export default Index
