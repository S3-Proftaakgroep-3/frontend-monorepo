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

    const res = await fetch(`https://mdmaorderservice.azurewebsites.net/api/order/restaurantId/${restaurantId}/tableId/${tableId}`)
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
    
    useEffect(() => {
        let totalPrice = 0;
        
        if (orders.length > 0) {
            orders.map((order: IOrder, key: number) => {
                if (order.products != null) {
                    order.products.map((product: ICartItem, key: number) => {
                        totalPrice += (product.price * product.quantity);
                    })
                }
            })
            setTotalPrice(totalPrice);
        }
    }, [])

    return (
        <div id={styles.page}>
            <TopMenuSecondary allOrderHidden={true} label={"Your orders"}/>
            {
                orders != null && orders.length > 0 &&
                orders.map((order: IOrder, key: number) => {
                    return <SectionProductsPerOrder key={key} products={order.products} orderName={`Order ${key + 1}`}/>
                })
            }
            <NewOrderMenu onClick={() => {}} label={"Request bill"} price={orderTotalPrice}/>
        </div>
    )
}
export default All