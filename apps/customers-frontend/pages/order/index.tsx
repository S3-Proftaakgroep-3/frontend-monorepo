import type {NextPage} from 'next'
import * as React from "react";
import styles from '../../styles/item.module.css'
import {CategoryBtn, ICategory, NewOrderMenu, OrderCard, TopNavigation} from 'ui';
import {ICartItem} from "ui/Interfaces/ICartItem";
import {useEffect, useState} from "react";


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
    
    function createOrder() {
        
    }
    
    return (
        <div id={styles.page}>
            <TopNavigation/>
            {
                order.map((orderItem: ICartItem, key: number) => {
                    return <OrderCard key={key} title={orderItem.product} price={orderItem.price} quantity={orderItem.quantity}/>
                })
            }
            <NewOrderMenu onClick={() => {createOrder()}} price={totalPrice}/>
        </div>
    )
}

export default Index
