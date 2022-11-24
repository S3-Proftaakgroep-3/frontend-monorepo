import {ICartItem} from "../../Interfaces/ICartItem";
import styles from "../../Styles/Molecules/sectionProductsPerOrder.module.css";
import classNames from "classnames/dedupe";
import React, {useState} from "react";
import fonts from "../../Styles/Utils/fonts.module.css";
import {IOrder} from "../../Interfaces/IOrder";
import {OrderCard} from "../Atoms";
import {IProduct} from "../../Interfaces";

export const SectionProductsPerOrder = ({
    orderName,
    products
}: {
    orderName: string,
    products: ICartItem[]
}) => {
    return(
        <div className={styles.container}>
            <div className={styles.orderTop}>
                <p id={styles.title}>{orderName}</p>
            </div>
            <div className={styles.menu}>
                {
                    products?.map((product: ICartItem, key: number) => {
                        return <OrderCard key={key} item={product}/>
                    })
                }
            </div>
        </div>
    )
}