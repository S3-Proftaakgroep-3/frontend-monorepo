import * as React from "react";
import {NextPage} from "next";
import styles from "../styles/Home.module.css";
import {NewOrderMenu} from "ui/Components/Molecules/newOrderMenu";
import {OrderCard} from "ui";
import {useEffect, useState} from "react";

interface PropTypes {
    item: any
}

const orderPage: NextPage<PropTypes> = ({ item }: PropTypes) => {

    return(
        <div className={styles.page}>
            <OrderCard title={"Pizza Pepperoni"} price={19.99} quantity={5}/>
            <div className={styles.orderMenu}>
                <NewOrderMenu price={99.95}/>
            </div>
        </div>
    )
}
