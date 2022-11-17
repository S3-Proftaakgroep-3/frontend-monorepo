import {NextPage} from "next";
import styles from '../../styles/item.module.css'
import {IRestaurant, NewOrderMenu, OrderCard, TopMenuSecondary} from "ui";
import {ICartItem} from "ui/Interfaces/ICartItem";
import * as React from "react";
import {IOrder} from "ui/Interfaces/IOrder";
import fonts from "ui/Styles/Utils/fonts.module.css";
import {useEffect, useState} from "react";
import {SectionProductsPerOrder} from "ui/Components/Molecules/sectionProductsPerOrder";

interface ContextTypes {
    query: any
}

export async function getServerSideProps({query}: ContextTypes) {
    const restaurantId = query.restaurantId
    const tableId = query.tableId

    const res = await fetch(`https://mdma-order-service.herokuapp.com/api/order/restaurantId/${restaurantId}/tableId/${tableId}`)
    const data = await res.json();

    return {
        props: {
            orders: data as IOrder[]
        }
    }
}

interface PropTypes {
    orders: IOrder[]
}

const All: NextPage<PropTypes> = ({orders}: PropTypes) => {
    const [orderTotalPrice, setTotalPrice] = useState(0)

    let totalPrice = 0;

    useEffect(() => {
        orders.map((order: IOrder, key: number) => {
            order.products.map((product: ICartItem, key: number) => {
                totalPrice += (product.price * product.quantity);
            })
        })
        setTotalPrice(totalPrice);
    }, [])

    return (
        <div id={styles.page}>
            <TopMenuSecondary restaurantId={""} tableId={""} label={"Your orders"}/>
            {
                orders.map((order: IOrder, key: number) => {
                    return <SectionProductsPerOrder key={key} products={order.products} orderName={"Order 1"}/>
                })
            }
            <NewOrderMenu onClick={() => {}} price={orderTotalPrice}/>
        </div>
    )
}
export default All