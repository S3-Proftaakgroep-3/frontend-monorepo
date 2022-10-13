import * as React from "react";
import {NextPage} from "next";
import styles from "../styles/Home.module.css";
import {NewOrderMenu} from "ui/Components/Molecules/newOrderMenu";
import {OrderCard} from "ui";

const orderPage : NextPage = () => {
    return(
        <div className={styles.page}>
            <OrderCard title={"Pizza Pepperoni"} price={19.99} quantity={5}/>
            <div className={styles.orderMenu}>
                <NewOrderMenu price={99.95}/>
            </div>
        </div>
    )
}
export default orderPage
