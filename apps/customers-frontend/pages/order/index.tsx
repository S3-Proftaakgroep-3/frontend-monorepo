import type {NextPage} from 'next'
import * as React from "react";
import styles from '../../styles/item.module.css'
import {NewOrderMenu, OrderCard, TopMenuSecondary, TopNavigation} from 'ui';
import {ICartItem} from "ui/Interfaces/ICartItem";
import {useEffect, useState} from "react";
import {IOrder} from "ui/Interfaces/IOrder";
import toast, {Toaster} from "react-hot-toast";
import classNames from "classnames/dedupe";
import {router} from "next/client";
import {useRouter} from "next/router";


const Index: NextPage<null> = () => {
    const [order, setOrder] = useState<any[]>([])
    const [totalPrice, setTotalPrice] = useState(0);
    const [tableId, setTableId] = useState("");
    const [restaurantId, setRestaurantId] = useState("");
    const router = useRouter();

    useEffect(() => {
        setOrder(JSON.parse(localStorage.getItem("order")!));
        setTableId(sessionStorage.getItem("tableId")!);
        setRestaurantId(sessionStorage.getItem("restaurantId")!);
    }, [])
    
    useEffect(() => {
        if (order != null) {
            let productPrice = 0;
            for (let i = 0; i < order.length; i++) {
                productPrice += (order[i].price * order[i].quantity);
            }
            setTotalPrice(productPrice);
        }
    }, [order])
    
    const createOrder = async () => {
        let newOrder: IOrder
        
        newOrder = {
            tableId: sessionStorage.getItem("tableId")!,
            restaurantId: sessionStorage.getItem("restaurantId")!,
            products: order,
            orderStatus: "Received"
        }
        
        if (newOrder.products != null) {
            await postOrder(newOrder)
        } else {
            notifyError("Nothing to order.");
        }
    }

    const postOrder = async (order: IOrder) => {
        await fetch(`https://mdmaorderservice.azurewebsites.net/api/order/create`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        }).finally(() => {
            localStorage.removeItem("order")
            setOrder([]);
            router.push(`/order/all?tableId=${tableId}&restaurantId=${restaurantId}`)
            notifySuccess();
        }).catch(() => {
            notifyError("Something went wrong.");
        });
    }

    const notifySuccess = () => {
        toast.success(`Order successfully placed.`);
    }

    const notifyError = (message: string) => {
        toast.error(`${message}`);
    }
    
    return (
        <div id={styles.page}>
            <TopMenuSecondary allOrderHidden={false} restaurantId={restaurantId!} tableId={tableId!} label={"New order"}/>
            {
                order != null &&
                order.map((orderItem: ICartItem, key: number) => {
                    return <OrderCard key={key} item={orderItem}/>
                })
            }
            <NewOrderMenu onClick={async () => {await createOrder()}} label={"Order"} price={totalPrice}/>
        </div>
    )
}

export default Index
