import type {NextPage} from 'next'
import * as React from "react";
import styles from '../../styles/item.module.css'
import {NewOrderMenu, OrderCard, TopMenuSecondary, TopNavigation} from 'ui';
import {ICartItem} from "ui/Interfaces/ICartItem";
import {useEffect, useState} from "react";
import {IOrder} from "ui/Interfaces/IOrder";


const Index: NextPage<null> = () => {
    const [order, setOrder] = useState<any[]>([])
    const [totalPrice, setTotalPrice] = useState(0);
    const tableId = sessionStorage.getItem("tableId");
    const restaurantId = sessionStorage.getItem("restaurantId")

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
            products: order,
            orderStatus: "Received"
        }
        
        await postOrder(newOrder)
    }

    const postOrder = async (order: IOrder) => {
        await fetch(`https://mdma-order-service.herokuapp.com/api/order/create`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        }).finally(() => {
            localStorage.removeItem("order")
        });
    }
    
    return (
        <div id={styles.page}>
            <TopMenuSecondary restaurantId={restaurantId!} tableId={tableId!} label={"New order"}/>
            {
                order.map((orderItem: ICartItem, key: number) => {
                    return <OrderCard key={key} item={orderItem}/>
                })
            }
            <NewOrderMenu onClick={async () => {await createOrder()}} price={totalPrice}/>
        </div>
    )
}

export default Index
